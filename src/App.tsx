import { useState } from 'react';
import './App.css';

const StudyPlan = () => {
  const [completedItems, setCompletedItems] = useState(new Set());
  const [activeDay, setActiveDay] = useState(1);

  const toggleItem = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  // Use emoji for icons
  const studyPlan: Record<string, any> = {
    "Day 1: Python Fundamentals & Data Handling": {
      icon: "💻",
      color: "day-blue",
      focus: "Building Python foundation for AI work",
      items: [
        { id: "d1_1", text: "Python syntax: variables, data types, control structures", hours: "2-3 hrs", priority: "high" },
        { id: "d1_2", text: "Functions, classes, and modules", hours: "2-3 hrs", priority: "high" },
        { id: "d1_3", text: "NumPy basics: arrays, operations, broadcasting", hours: "2-3 hrs", priority: "high" },
        { id: "d1_4", text: "Pandas fundamentals: DataFrames, data manipulation", hours: "2-3 hrs", priority: "high" },
        { id: "d1_5", text: "File handling: JSON, CSV, text processing", hours: "1-2 hrs", priority: "medium" },
        { id: "d1_6", text: "Practice: Build a simple data processing script", hours: "1-2 hrs", priority: "medium" }
      ]
    },
    "Day 2: ML Libraries & GenAI Foundations": {
      icon: "🧠",
      color: "day-green",
      focus: "Essential ML tools and GenAI concepts",
      items: [
        { id: "d2_1", text: "Introduction to transformers and attention mechanism", hours: "3-4 hrs", priority: "high" },
        { id: "d2_2", text: "Hugging Face ecosystem: transformers, datasets, tokenizers", hours: "3-4 hrs", priority: "high" },
        { id: "d2_3", text: "What are Large Language Models (LLMs)?", hours: "2-3 hrs", priority: "high" },
        { id: "d2_4", text: "Generative AI vs Traditional AI differences", hours: "1-2 hrs", priority: "medium" },
        { id: "d2_5", text: "Practice: Load and use a pre-trained model", hours: "2-3 hrs", priority: "high" }
      ]
    },
    "Day 3: LLM Architecture & Training": {
      icon: "⚡",
      color: "day-purple",
      focus: "Deep dive into LLM internals",
      items: [
        { id: "d3_1", text: "Transformer architecture: encoders, decoders, self-attention", hours: "4-5 hrs", priority: "high" },
        { id: "d3_2", text: "GPT family: GPT-1, GPT-2, GPT-3, GPT-4 evolution", hours: "2-3 hrs", priority: "high" },
        { id: "d3_3", text: "Training process: pre-training, fine-tuning, RLHF", hours: "3-4 hrs", priority: "high" },
        { id: "d3_4", text: "Tokenization: BPE, WordPiece, SentencePiece", hours: "2-3 hrs", priority: "medium" },
        { id: "d3_5", text: "Practice: Implement basic attention mechanism", hours: "2-3 hrs", priority: "medium" }
      ]
    },
    "Day 4: Python for AI & API Integration": {
      icon: "💻",
      color: "day-yellow",
      focus: "Python skills for AI applications",
      items: [
        { id: "d4_1", text: "OpenAI API: GPT models, embeddings, fine-tuning", hours: "3-4 hrs", priority: "high" },
        { id: "d4_2", text: "LangChain basics: chains, agents, memory", hours: "3-4 hrs", priority: "high" },
        { id: "d4_3", text: "Vector databases: Pinecone, Chroma, FAISS", hours: "2-3 hrs", priority: "high" },
        { id: "d4_4", text: "Async programming in Python for AI apps", hours: "2-3 hrs", priority: "medium" },
        { id: "d4_5", text: "Practice: Build a simple RAG system", hours: "3-4 hrs", priority: "high" }
      ]
    },
    "Day 5: Document AI & Text Processing": {
      icon: "📖",
      color: "day-red",
      focus: "Document processing for DocRack.ai relevance",
      items: [
        { id: "d5_1", text: "Document parsing: PDF, DOCX, HTML extraction", hours: "3-4 hrs", priority: "high" },
        { id: "d5_2", text: "OCR and document understanding", hours: "2-3 hrs", priority: "high" },
        { id: "d5_3", text: "Text chunking strategies for long documents", hours: "2-3 hrs", priority: "high" },
        { id: "d5_4", text: "Embeddings: sentence transformers, semantic search", hours: "3-4 hrs", priority: "high" },
        { id: "d5_5", text: "Practice: Build document Q&A system", hours: "3-4 hrs", priority: "high" }
      ]
    },
    "Day 6: Advanced GenAI Techniques": {
      icon: "🧠",
      color: "day-indigo",
      focus: "Cutting-edge GenAI methods",
      items: [
        { id: "d6_1", text: "Prompt engineering: techniques, patterns, best practices", hours: "3-4 hrs", priority: "high" },
        { id: "d6_2", text: "Retrieval Augmented Generation (RAG) deep dive", hours: "3-4 hrs", priority: "high" },
        { id: "d6_3", text: "Fine-tuning strategies: LoRA, QLoRA, parameter-efficient", hours: "3-4 hrs", priority: "high" },
        { id: "d6_4", text: "Multi-modal models: vision + language", hours: "2-3 hrs", priority: "medium" },
        { id: "d6_5", text: "Practice: Implement advanced RAG with re-ranking", hours: "2-3 hrs", priority: "high" }
      ]
    },
    "Day 7: LLM Evaluation & Optimization": {
      icon: "🎯",
      color: "day-teal",
      focus: "Model performance and production readiness",
      items: [
        { id: "d7_1", text: "LLM evaluation metrics: BLEU, ROUGE, perplexity, human eval", hours: "3-4 hrs", priority: "high" },
        { id: "d7_2", text: "Inference optimization: quantization, pruning, distillation", hours: "3-4 hrs", priority: "high" },
        { id: "d7_3", text: "Handling hallucinations and bias in LLMs", hours: "2-3 hrs", priority: "high" },
        { id: "d7_4", text: "Cost optimization strategies for LLM deployment", hours: "2-3 hrs", priority: "medium" },
        { id: "d7_5", text: "Practice: Evaluate and optimize a model", hours: "2-3 hrs", priority: "medium" }
      ]
    },
    "Day 8: Production & Deployment": {
      icon: "⚡",
      color: "day-orange",
      focus: "Taking GenAI to production",
      items: [
        { id: "d8_1", text: "FastAPI for ML model serving", hours: "3-4 hrs", priority: "high" },
        { id: "d8_2", text: "Docker containerization for AI apps", hours: "2-3 hrs", priority: "high" },
        { id: "d8_3", text: "Model versioning and MLOps basics", hours: "2-3 hrs", priority: "medium" },
        { id: "d8_4", text: "Monitoring and logging for LLM applications", hours: "2-3 hrs", priority: "medium" },
        { id: "d8_5", text: "Security considerations for GenAI apps", hours: "2-3 hrs", priority: "medium" },
        { id: "d8_6", text: "Practice: Deploy a simple GenAI API", hours: "2-3 hrs", priority: "high" }
      ]
    },
    "Day 9: Advanced Python & AI Frameworks": {
      icon: "💻",
      color: "day-pink",
      focus: "Advanced Python skills for AI",
      items: [
        { id: "d9_1", text: "Advanced Python: decorators, context managers, metaclasses", hours: "3-4 hrs", priority: "medium" },
        { id: "d9_2", text: "PyTorch fundamentals for transformer models", hours: "3-4 hrs", priority: "high" },
        { id: "d9_3", text: "GPU programming basics with CUDA", hours: "2-3 hrs", priority: "medium" },
        { id: "d9_4", text: "Streamlit for rapid AI app prototyping", hours: "2-3 hrs", priority: "high" },
        { id: "d9_5", text: "Testing strategies for AI applications", hours: "2-3 hrs", priority: "medium" },
        { id: "d9_6", text: "Practice: Build end-to-end GenAI application", hours: "3-4 hrs", priority: "high" }
      ]
    },
    "Day 10: Interview Prep & Industry Trends": {
      icon: "🎯",
      color: "day-gray",
      focus: "Final preparation and current trends",
      items: [
        { id: "d10_1", text: "Current GenAI landscape: GPT-4, Claude, Gemini, open-source models", hours: "2-3 hrs", priority: "high" },
        { id: "d10_2", text: "Ethics and responsible AI development", hours: "2-3 hrs", priority: "high" },
        { id: "d10_3", text: "Document AI use cases and business applications", hours: "2-3 hrs", priority: "high" },
        { id: "d10_4", text: "Technical interview prep: coding challenges, system design", hours: "3-4 hrs", priority: "high" },
        { id: "d10_5", text: "DocRack.ai research: company, products, competitors", hours: "2-3 hrs", priority: "high" },
        { id: "d10_6", text: "Practice: Mock technical interviews", hours: "2-3 hrs", priority: "high" }
      ]
    }
  };

  const getProgressPercentage = () => {
    const totalItems = Object.values(studyPlan).reduce((sum, day) => sum + day.items.length, 0);
    return Math.round((completedItems.size / totalItems) * 100);
  };

  const getDayProgress = (dayItems: {id: string}[]) => {
    const completed = dayItems.filter((item: {id: string}) => completedItems.has(item.id)).length;
    return Math.round((completed / dayItems.length) * 100);
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high': return 'priority-high';
      case 'medium': return 'priority-medium';
      case 'low': return 'priority-low';
      default: return 'priority-low';
    }
  };

  return (

    <div className="container">
      <div className="header">
        <span className="main-icon">🧠</span>
        <div>
          <h1 className="title">GenAI Interview Prep</h1>
          <p className="subtitle">10-day intensive study plan for GenAI position</p>
        </div>
      </div>
      <div className="progress-bar-section">
        <div className="progress-labels">
          <span>Overall Progress</span>
          <span>{getProgressPercentage()}%</span>
        </div>
        <div className="progress-bar-bg">
          <div className="progress-bar-fill" style={{ width: `${getProgressPercentage()}%` }}></div>
        </div>
      </div>
      <div className="days-nav">
        {Object.keys(studyPlan).map((day, index) => (
          <button
            key={index}
            onClick={() => setActiveDay(index + 1)}
            className={activeDay === index + 1 ? 'day-btn active' : 'day-btn'}
          >
            Day {index + 1}
          </button>
        ))}
      </div>
      <div className="days-content">
        {Object.entries(studyPlan).map(([dayTitle, dayData], dayIndex) => (
          <div
            key={dayIndex}
            className={`day-card ${dayData.color} ${activeDay === dayIndex + 1 ? 'show' : 'hide'}`}
          >
            <div className="day-header">
              <span className="day-icon">{dayData.icon}</span>
              <h2 className="day-title">{dayTitle}</h2>
              <span className="day-progress">{getDayProgress(dayData.items)}% Complete</span>
            </div>
            <p className="day-focus">Focus: {dayData.focus}</p>
            <div className="day-items">
              {dayData.items.map((item: any) => (
                <div
                  key={item.id}
                  className={`item-card ${completedItems.has(item.id) ? 'completed' : ''}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className="item-status">
                    {completedItems.has(item.id) ? '✔️' : '⭕'}
                  </span>
                  <span className={completedItems.has(item.id) ? 'item-text completed-text' : 'item-text'}>
                    {item.text}
                  </span>
                  <span className={`item-priority ${getPriorityClass(item.priority)}`}>{item.priority}</span>
                  <span className="item-hours">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="tips-section">
        <div className="tips-card tips-blue">
          <h3>🚀 DocRack.ai Specific Tips:</h3>
          <ul>
            <li>• Focus heavily on document processing and RAG systems</li>
            <li>• Practice building Q&A systems with PDF/document inputs</li>
            <li>• Understand enterprise document workflows</li>
            <li>• Be ready to discuss scaling challenges for document AI</li>
          </ul>
        </div>
        <div className="tips-card tips-green">
          <h3>💡 Interview Success Tips:</h3>
          <ul>
            <li>• Build 2-3 small GenAI projects to showcase</li>
            <li>• Practice explaining complex AI concepts simply</li>
            <li>• Stay updated on latest LLM developments</li>
            <li>• Prepare for both technical and product questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan;
