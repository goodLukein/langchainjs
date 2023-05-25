import { LLMChain } from "../llm_chain.js";
import { StuffDocumentsChain, MapReduceDocumentsChain, RefineDocumentsChain, } from "../combine_docs_chain.js";
import { DEFAULT_PROMPT } from "./stuff_prompts.js";
import { REFINE_PROMPT } from "./refine_prompts.js";
export const loadSummarizationChain = (llm, params = { type: "map_reduce" }) => {
    if (params.type === "stuff") {
        const { prompt = DEFAULT_PROMPT } = params;
        const llmChain = new LLMChain({ prompt, llm });
        const chain = new StuffDocumentsChain({
            llmChain,
            documentVariableName: "text",
        });
        return chain;
    }
    if (params.type === "map_reduce") {
        const { combineMapPrompt = DEFAULT_PROMPT, combinePrompt = DEFAULT_PROMPT, returnIntermediateSteps, } = params;
        const llmChain = new LLMChain({ prompt: combineMapPrompt, llm });
        const combineLLMChain = new LLMChain({ prompt: combinePrompt, llm });
        const combineDocumentChain = new StuffDocumentsChain({
            llmChain: combineLLMChain,
            documentVariableName: "text",
        });
        const chain = new MapReduceDocumentsChain({
            llmChain,
            combineDocumentChain,
            documentVariableName: "text",
            returnIntermediateSteps,
        });
        return chain;
    }
    if (params.type === "refine") {
        const { refinePrompt = REFINE_PROMPT, questionPrompt = DEFAULT_PROMPT } = params;
        const llmChain = new LLMChain({ prompt: questionPrompt, llm });
        const refineLLMChain = new LLMChain({ prompt: refinePrompt, llm });
        const chain = new RefineDocumentsChain({
            llmChain,
            refineLLMChain,
            documentVariableName: "text",
        });
        return chain;
    }
    throw new Error(`Invalid _type: ${params.type}`);
};
