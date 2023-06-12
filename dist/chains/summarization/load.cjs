"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadSummarizationChain = void 0;
const llm_chain_js_1 = require("../llm_chain.cjs");
const combine_docs_chain_js_1 = require("../combine_docs_chain.cjs");
const stuff_prompts_js_1 = require("./stuff_prompts.cjs");
const refine_prompts_js_1 = require("./refine_prompts.cjs");
const loadSummarizationChain = (llm, params = { type: "map_reduce" }) => {
    if (params.type === "stuff") {
        const { prompt = stuff_prompts_js_1.DEFAULT_PROMPT } = params;
        const llmChain = new llm_chain_js_1.LLMChain({ prompt, llm });
        const chain = new combine_docs_chain_js_1.StuffDocumentsChain({
            llmChain,
            documentVariableName: "text",
        });
        return chain;
    }
    if (params.type === "map_reduce") {
        const { combineMapPrompt = stuff_prompts_js_1.DEFAULT_PROMPT, combinePrompt = stuff_prompts_js_1.DEFAULT_PROMPT, returnIntermediateSteps, } = params;
        const llmChain = new llm_chain_js_1.LLMChain({ prompt: combineMapPrompt, llm });
        const combineLLMChain = new llm_chain_js_1.LLMChain({ prompt: combinePrompt, llm });
        const combineDocumentChain = new combine_docs_chain_js_1.StuffDocumentsChain({
            llmChain: combineLLMChain,
            documentVariableName: "text",
        });
        const chain = new combine_docs_chain_js_1.MapReduceDocumentsChain({
            llmChain,
            combineDocumentChain,
            documentVariableName: "text",
            returnIntermediateSteps,
        });
        return chain;
    }
    if (params.type === "refine") {
        const { refinePrompt = refine_prompts_js_1.REFINE_PROMPT, questionPrompt = stuff_prompts_js_1.DEFAULT_PROMPT } = params;
        const llmChain = new llm_chain_js_1.LLMChain({ prompt: questionPrompt, llm });
        const refineLLMChain = new llm_chain_js_1.LLMChain({ prompt: refinePrompt, llm });
        const chain = new combine_docs_chain_js_1.RefineDocumentsChain({
            llmChain,
            refineLLMChain,
            documentVariableName: "text",
        });
        return chain;
    }
    throw new Error(`Invalid _type: ${params.type}`);
};
exports.loadSummarizationChain = loadSummarizationChain;
