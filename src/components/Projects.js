function Projects() {
  return (
    <section id="projects" className="pt-24 px-4 py-8 bg-gray-50">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {/* Project 1 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
  <h3 className="text-xl font-bold text-blue-600 mb-2">
    Resume Matcher – Resume Keyword Scanner
  </h3>
  <p className="text-gray-700 text-sm leading-relaxed">
    Designed and developed an NLP-powered web application that assists users in evaluating how well their resume aligns with a given job description. Built using Python, Flask, Streamlit, and NLTK, the system allows users to upload PDF resumes, which are then parsed using PyMuPDF to extract raw text data. The extracted text is cleaned and processed with natural language processing techniques to identify and compare relevant keywords against those provided in the job description.
    <br /><br />
    The application calculates a match percentage based on keyword overlap and presents the results through an interactive and visually intuitive interface built in Streamlit. The solution is particularly useful for job seekers looking to tailor their resumes for ATS (Applicant Tracking System) optimization.
    <br /><br />
     The full stack includes Python for backend logic, Flask for API integration, NLTK for keyword extraction, and Streamlit for live web deployment.
  </p>
  <div className="mt-4 space-x-4">
    <a
      href="https://github.com/lohith-creator/Resume-keyword-scanner.git"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-blue-600 hover:underline"
    >
      View on GitHub
    </a>
    {/* Optional: Live demo link */}
    { <a
      href="https://resume-keyword-scanner-olrz2gjzdckancg7gjegxj.streamlit.app/"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-green-600 hover:underline"
    >
      Live Demo
    </a> }
  </div>
</div>

        {/* Project 2 */}
        <div className="bg-white shadow-lg rounded-xl p-6">
  <h3 className="text-xl font-bold text-blue-600 mb-2">
    Fake News Detection Using Machine Learning
  </h3>
  <p className="text-gray-700 text-sm leading-relaxed">
   Developed a machine learning-powered application to classify news content as real or fake, addressing the growing challenge of digital misinformation.
  <br /><br />
  The system is built using Python, Scikit-learn, and Flask, and is trained on a combined dataset of labeled real and fake news articles.
  NLP techniques such as tokenization, stop-word removal, and TF-IDF vectorization were applied to extract meaningful features from raw text.
  <br /><br />
  A Logistic Regression model — selected for its balance of accuracy and interpretability — powers the classification.
  The trained model is deployed via a RESTful Flask API that accepts user input and returns predictions in JSON format.
  <br /><br />
  The model is persisted using joblib for fast, real-time inference, and the pipeline is enhanced with a Streamlit interface
  that allows users to enter news content and instantly view results with a confidence score.
  </p>
  <div className="mt-4 space-x-4">
    <a
      href="https://github.com/lohith-creator/fake-news-detection.git"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-blue-600 hover:underline"
    >
      View on GitHub
    </a>
    {/* Optional Live Demo */}
    {/* <a
      href="https://yourstreamlitapp.com"
      target="_blank"
      rel="noreferrer"
      className="text-sm text-green-600 hover:underline"
    >
      Live Demo
    </a> */}
  </div>
</div>

      </div>
    </section>
  );
}

export default Projects;
