const text1 = "today is sunny and okay I feel yes so happy";
const text2 = "tomorrow is sunny and that makes today is sunny and okay me feel yes so happy too";

extractLongestCommonSubSentences(text1, text2) // 'today is sunny and okay'

function extractLongestCommonSubSentences(text1, text2) {
  const commonSubSentences = extractCommonSubSentences(text1, text2, 2);

  return commonSubSentences.reduce((acc, s) => s.length > acc.length ? s : acc, '');
}

function extractCommonSubSentences(text1, text2, limit = 3) {
  const wordsList = split(text1, limit);

  return wordsList.map(words => words.join(' ')).filter(sentence => text2.includes(sentence))
  
  function split(text, limit = 3) {
    const words = text.split(/\s+/);
    const sentences = [];
  
    for (let i = 0; i < words.length; i+=1) {
      for (let n = 0; i + limit + n <= words.length; n+=1) {
        // console.log({ i, n, limit, 'length': words.length })
        sentences.push(words.slice(i, i + limit + n)) // 0,3 0,4 0,length
      }
    }
  
    return sentences;
  }
}

// https://www.youtube.com/watch?v=oWsMIW-5xUc&list=PLLssT5z_DsK8HbD2sPcUIDfQ7zmBarMYv

src = $$('#items #video-title').map(x => x.textContent).slice(0, 127).map(t => t.trim())

function search(word) {
  return src.filter(t => new RegExp(word, 'i').test(t));
}

function randomIndex(arr) { return Math.floor(Math.random()* arr.length) } 
function randomPick(arr, count) {
  return new Array(count).fill(0).map(() => arr[randomIndex(arr)]) 
}

clean(src, 10)

function clean(src, factor) {
  const limit = src.length;

  let list = src;
  let xs;
  let longest;
  const set = new Set();

  let noTimes = 0;
  
  for (let i = 0; i < limit; i++) {
    const input = randomPick(list, 2);
    longest = extractLongestCommonSubSentences(input[0], input[1]);

    console.log(`#${i} "${longest}"`);

    if (longest.length <= 3) {
      noTimes++;

      if (noTimes >= limit / factor) {
        console.log(`break at #${i} "${longest}"`, noTimes);
        break;
      }

      continue;
    }

    if (set.has(longest)) {
      continue;
    }

    set.add(longest);

  
    xs = list.map(t => t.replace(longest, ''));
  
    list = xs;
  }

  return xs;
}

console.log(src)
console.log(xs)




src = [
  "Lecture 01 — NLP Course Introduction — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 02 —  Regular Expressions — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 03 —  Regular Expressions in Practical NLP — [ NLP || Chris Manning || Stanford University ]",
  "Lecture 04 — Word Tokenization — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 05 — Word Normalization and Stemming  — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 06 — Sentence Segmentation — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 07 — Defining Minimum Edit Distance — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 08 —  Computing Minimum Edit Distance — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 09 —  Backtrace for Computing Alignments — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 10 — Weighted Minimum Edit Distance — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 11 — Minimum Edit Distance in Computational Biology — [ NLP || Dan Jurafsky ]",
  "Lecture 12 — Introduction to N-grams — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 13 — Estimating N-gram Probabilities — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 14 — Evaluation and Perplexity — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 15 — Generalization and Zeros — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 16 — Smoothing Add One — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 17 — Interpolation — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 18 — Good Turing Smoothing — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 19 —   Kneser Ney Smoothing — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 20 — The Spelling Correction Task — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 21 —  The Noisy Channel Model of Spelling — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 22 —  Real Word Spelling Correction — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 23 — State of the Art Systems  — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 24 —  What is Text Classification — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 25 —  Naive Bayes — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 26 — Formalizing the Naive Bayes Classifier — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 27 — Naive Bayes  Learning — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 28 — Naive Bayes  Relationship to Language Modeling — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 29 —  Multinomial Naive Bayes  A Worked Example — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 30 — Precision, Recall, and the F measure — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 31 — Text Classification  Evaluation — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 32 — Practical Issues in Text Classification— [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 33 — What is Sentiment Analysis — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 34 — Sentiment Analysis  A baseline algorithm— [ NLP || Dan Jurafsky || Stanford University]",
  "Lecture 35 — Sentiment Lexicons — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 36 — Learning Sentiment Lexicons  — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 37 — Other Sentiment Tasks  — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 38 — Generative vs  Discriminative Models — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 39 — Making features from text for discriminative NLP models —[ NLP || Christopher Manning ]",
  "Lecture 40 — Feature Based Linear Classifiers — [ NLP || Christopher Manning|| Stanford University ]",
  "Lecture 41 —  Building a Maxent Model  The Nuts and Bolts — [ NLP || Christopher Manning ]",
  "Lecture 42 — Generative vs  Discriminative models  The problem of overcounting evidence — [ NLP ]",
  "Lecture 43 — Introduction to Information Extraction — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 44 — Evaluation of Named Entity Recognition — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 45 — Sequence Models for Named Entity Recognition — [ NLP || Christopher Manning ]",
  "Lecture 46 — Maximum Entropy Sequence Models — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 47 — The Spelling Correction Task — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 48 — The Noisy Channel Model of Spelling — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 49 — Real Word Spelling Correction — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 50 —  State of the Art Systems — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 51 — What is Text Classification — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 52 — Naive Bayes — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 53 — Formalizing the Naive Bayes Classifier — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 54 — Naive Bayes  Learning — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 55 —  Naive Bayes  Relationship to Language Modeling — [ NLP || Dan Jurafsky ]",
  "Lecture 56 — Multinomial Naive Bayes  A Worked Example — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 57 — Precision Recall and the F measure — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 58 — Text Classification  Evaluation — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 59 — Practical Issues in Text Classification — [ NLP || Dan Jurafsky || Stanford University]",
  "Lecture 60 — What is Sentiment Analysis — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 61 — Sentiment Analysis -- A baseline algorithm — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 62 — Sentiment Lexicons — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 63 — Learning Sentiment Lexicons — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 64 —  Other Sentiment Tasks — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 65 — Generative vs  Discriminative Models — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 66 — Making features from text for discriminative NLP models — [ NLP || Chrisopher Manning ]",
  "Lecture 67 —  Feature Based Linear Classifiers — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 68 — Building a Maxent Model  The Nuts and Bolts — [ NLP || Christopher Manning ]",
  "Lecture 69 — Generative vs  Discriminative models  The problem of overcounting evidence — [ NLP ]",
  "Lecture 70 — Maximizing the Likelihood — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 71 — Introduction to Information Extraction — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 72 — Evaluation of Named Entity Recognition  — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 73 — Sequence Models for Named Entity Recognition  — [ NLP || Christopher Manning]",
  "Lecture 74 — Maximum Entropy Sequence Models  — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 75 — What is Relation Extraction  — — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 76 — Using Patterns to Extract Relations — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 77 — Supervised Relation Extraction — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 78 — Semi Supervised and Unsupervised Relation Extraction — [ NLP || Dan Jurafsky ]",
  "Lecture 79 —The Maximum Entropy Model Presentation — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 80 — Feature Overlap Feature Interaction — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 81 — Conditional Maxent Models for Classification — [ NLP || Chrisopher Manning ]",
  "Lecture 82 — Smoothing Regularization Priors for Maxent Models — [ NLP || Christopher Manning ]",
  "Lecture 83 —  An Intro to Parts of Speech and POS Tagging — [ NLP || Christopher Manning ]",
  "Lecture 84 — Some Methods and Results on Sequence Models for POS Tagging — [ NLP || Chris Manning ]",
  "Lecture 85 — Syntactic Structure  Constituency vs Dependency — [ NLP || Christopher Manning ]",
  "Lecture 86 —  Empirical Data Driven Approach to Parsing — [ NLP || Christopher Manning ]",
  "Lecture 87 — The Exponential Problem in Parsing — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 88 — CFGs and PCFGs — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 89 —  Grammar Transforms — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 90 — CKY Parsing — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 91— CKY Example — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 92 — Constituency Parser Evaluation — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 93 — Lexicalization of PCFGs — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 94 — Charniaks Model — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 95 — PCFG Independence Assumptions — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 96 — The Return of Unlexicalized PCFGs — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 97 — Latent Variable PCFGs — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 98 — Dependency Parsing Introduction — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 99 — Greedy Transition Based Parsing — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 100 — Dependencies Encode Relational Structure — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 101 —Introduction to Information Retrieval — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 102 — Term Document Incidence Matrices — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 103 — The Inverted Index — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 104 — Query Processing with the Inverted Index — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 105 — Phrase Queries and Positional Indexes — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 106 — Introducing Ranked Retrieval — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 107 — Scoring with the Jaccard Coefficient — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 108 — Term Frequency Weighting — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 109 — Inverse Document Frequency Weighting — [ NLP || Christopher Manning || Stanford ]",
  "Lecture 110 — TF IDF Weighting — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 111 — The Vector Space Model 1— [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 112 — Calculating TF IDF Cosine Scores — [ NLP || Christopher Manning || Stanford Univ ]",
  "Lecture 113 — Evaluating Search Engines — [ NLP || Christopher Manning || Stanford University ]",
  "Lecture 114 — Word Senses and Word Relations — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 115  — WordNet and Other Online Thesauri — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 116 — Word Similarity and Thesaurus Methods — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 117 — Word Similarity Distributional Similarity I — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 118 — Word Similarity Distributional Similarity II — [ NLP || Dan Jurafsky || Stanford ]",
  "Lecture 119 — What is Question Answering — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 120 — Answer Types and Query Formulation — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 121 —  Passage Retrieval and Answer Extraction — [ NLP || Dan Jurafsky || Stanford Univ ]",
  "Lecture 122 — Using Knowledge in QA — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 123 — Advanced Answering Complex Questions — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 124 — Introduction to Summarization — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 125 — Generating Snippets — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 126 — Evaluating Summaries  ROUGE — [ NLP || Dan Jurafsky || Stanford University ]",
  "Lecture 127 — Summarizing Multiple Documents — [ NLP || Dan Jurafsky || Stanford University ]"
]
