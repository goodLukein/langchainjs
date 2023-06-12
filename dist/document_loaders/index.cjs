"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnstructuredLoader = exports.GithubRepoLoader = exports.NotionLoader = exports.CSVLoader = exports.JSONLinesLoader = exports.JSONLoader = exports.TextLoader = exports.EPubLoader = exports.DocxLoader = exports.PDFLoader = exports.SRTLoader = exports.UnknownHandling = exports.DirectoryLoader = exports.IMSDBLoader = exports.HNLoader = exports.GitbookLoader = exports.CollegeConfidentialLoader = exports.PuppeteerWebBaseLoader = exports.CheerioWebBaseLoader = exports.BaseDocumentLoader = void 0;
/* #__PURE__ */ console.error("[WARN] Importing from 'langchain/document_loaders' is deprecated. Import from eg. 'langchain/document_loaders/fs/text' or 'langchain/document_loaders/web/cheerio' instead. See https://js.langchain.com/docs/getting-started/install#updating-from-0052 for upgrade instructions.");
var base_js_1 = require("./base.cjs");
Object.defineProperty(exports, "BaseDocumentLoader", { enumerable: true, get: function () { return base_js_1.BaseDocumentLoader; } });
var cheerio_js_1 = require("./web/cheerio.cjs");
Object.defineProperty(exports, "CheerioWebBaseLoader", { enumerable: true, get: function () { return cheerio_js_1.CheerioWebBaseLoader; } });
var puppeteer_js_1 = require("./web/puppeteer.cjs");
Object.defineProperty(exports, "PuppeteerWebBaseLoader", { enumerable: true, get: function () { return puppeteer_js_1.PuppeteerWebBaseLoader; } });
var college_confidential_js_1 = require("./web/college_confidential.cjs");
Object.defineProperty(exports, "CollegeConfidentialLoader", { enumerable: true, get: function () { return college_confidential_js_1.CollegeConfidentialLoader; } });
var gitbook_js_1 = require("./web/gitbook.cjs");
Object.defineProperty(exports, "GitbookLoader", { enumerable: true, get: function () { return gitbook_js_1.GitbookLoader; } });
var hn_js_1 = require("./web/hn.cjs");
Object.defineProperty(exports, "HNLoader", { enumerable: true, get: function () { return hn_js_1.HNLoader; } });
var imsdb_js_1 = require("./web/imsdb.cjs");
Object.defineProperty(exports, "IMSDBLoader", { enumerable: true, get: function () { return imsdb_js_1.IMSDBLoader; } });
var directory_js_1 = require("./fs/directory.cjs");
Object.defineProperty(exports, "DirectoryLoader", { enumerable: true, get: function () { return directory_js_1.DirectoryLoader; } });
Object.defineProperty(exports, "UnknownHandling", { enumerable: true, get: function () { return directory_js_1.UnknownHandling; } });
var srt_js_1 = require("./fs/srt.cjs");
Object.defineProperty(exports, "SRTLoader", { enumerable: true, get: function () { return srt_js_1.SRTLoader; } });
var pdf_js_1 = require("./fs/pdf.cjs");
Object.defineProperty(exports, "PDFLoader", { enumerable: true, get: function () { return pdf_js_1.PDFLoader; } });
var docx_js_1 = require("./fs/docx.cjs");
Object.defineProperty(exports, "DocxLoader", { enumerable: true, get: function () { return docx_js_1.DocxLoader; } });
var epub_js_1 = require("./fs/epub.cjs");
Object.defineProperty(exports, "EPubLoader", { enumerable: true, get: function () { return epub_js_1.EPubLoader; } });
var text_js_1 = require("./fs/text.cjs");
Object.defineProperty(exports, "TextLoader", { enumerable: true, get: function () { return text_js_1.TextLoader; } });
var json_js_1 = require("./fs/json.cjs");
Object.defineProperty(exports, "JSONLoader", { enumerable: true, get: function () { return json_js_1.JSONLoader; } });
Object.defineProperty(exports, "JSONLinesLoader", { enumerable: true, get: function () { return json_js_1.JSONLinesLoader; } });
var csv_js_1 = require("./fs/csv.cjs");
Object.defineProperty(exports, "CSVLoader", { enumerable: true, get: function () { return csv_js_1.CSVLoader; } });
var notion_js_1 = require("./fs/notion.cjs");
Object.defineProperty(exports, "NotionLoader", { enumerable: true, get: function () { return notion_js_1.NotionLoader; } });
var github_js_1 = require("./web/github.cjs");
Object.defineProperty(exports, "GithubRepoLoader", { enumerable: true, get: function () { return github_js_1.GithubRepoLoader; } });
var unstructured_js_1 = require("./fs/unstructured.cjs");
Object.defineProperty(exports, "UnstructuredLoader", { enumerable: true, get: function () { return unstructured_js_1.UnstructuredLoader; } });
