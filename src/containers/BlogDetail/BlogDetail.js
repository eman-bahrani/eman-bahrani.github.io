import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollToTopButton from "../topbutton/Top";
import { StyleProvider } from "../../contexts/StyleContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    // Fetch the blog post based on the ID
    const fetchBlog = async () => {
      // Replace with your data fetching logic
      const data = {
        id: 1,
        title: "From Genomes to Communities: Translating Bioinformatics into Public Health Action",
        content: (
          <div>
  <p>
    The convergence of big data and healthcare has ushered in a new era of <em>precision public health</em>. While many associate "precision" solely with genomics, the concept extends far beyond genetic information. Modern precision public health encompasses a broader mission: delivering targeted interventions to specific populations when they're most needed, with the ultimate aim of improving health outcomes across all communities. This approach harnesses not only genomic data but also draws insights from vast arrays of information sources - from biomedical markers to environmental factors, from socioeconomic indicators to geographical patterns [1].
  </p>
  <p>
    Imagine a future where we can predict disease outbreaks before they happen, where newborns are screened to detect their susceptibility to rare and common inherited disorders to tailor their disease management early on, and where public health interventions are tailored to the unique characteristics of different communities. This isn't science fiction—it's the reality that bioinformatics and big data analytics are helping us build today.
  </p>
  <p>
    The revolution in data processing capabilities has generated unprecedented opportunities. According to the National Human Genome Research Institute, the cost of sequencing a human genome has plummeted from £100 million in 2001 to less than £1,000 today [2]. However, genomic data represents just one piece of the puzzle. The true power of precision public health lies in the integration of multiple data sources. Environmental monitoring, social determinants of health, healthcare utilisation patterns, population genomics, geospatial mapping, and clinical and biological markers must be analysed together to provide the necessary evidence for implementing effective public health policies, interventions and programmes.
  </p>

  <h2>Precision Public Health in Action</h2>
  <p>
    The field is littered with many achievements - though most are not explicitly declared under the umbrella of precision public health. Yet when we examine recent advances in healthcare and disease prevention, we can see how the principles of precision public health are already transforming patient care and population health management across multiple domains.
  </p>
  <p>
    In the field of cardiovascular health, genomic screening has revolutionised the detection of Familial Hypercholesterolaemia (FH). Early identification through family-based genomic screening has enabled timely interventions, significantly reducing morbidity and mortality [3]. Similarly, pharmacogenomics has transformed our approach to medication safety. By understanding genetic variations that affect drug metabolism, healthcare providers can now make more informed decisions about prescribing, reducing the risk of adverse reactions and improving treatment outcomes [4].
  </p>
  <p>
    The COVID-19 pandemic highlighted another crucial application of precision public health: pathogen genomics in infectious disease control. Genomic sequencing of the SARS-CoV-2 virus enabled real-time tracking of variants, informed public health responses, and guided vaccine development [5]. This experience has established a new paradigm for managing future disease outbreaks.
  </p>
  <p>
    Additionally, large-scale population genomics initiatives, such as the Qatar Genome Programme, are demonstrating how genetic information can be integrated into healthcare systems to develop targeted interventions for specific populations [6]. These programmes consider the unique genetic backgrounds of different communities, enabling more precise and effective public health strategies.
  </p>

  <h2>From Theory to Practice: A Personal Journey in Precision Health</h2>
  <p>
    For my master's research in bioinformatics and computational genomics at the Dunne Lab, I had the opportunity to work with data from the INCISE consortia. I explored how precision public health could transform disease prevention strategies, focusing on analysing demographics to identify groups with higher susceptibility to certain conditions, comparing these findings against current screening recommendations to evaluate their effectiveness.
  </p>
  <p>
    Current screening guidelines, while valuable, often take a relatively standardised approach to risk assessment. Our research questioned whether those classified as high risk truly needed invasive procedures, aiming to identify biomarkers of precancerous lesions that could better predict recurrence risk. This work exemplified how bioinformatics can bridge the gap between population-level screening programmes and individual patient care, combining patient demographic information, pathological evaluations, molecular pathway analysis, and advanced statistical modelling to create a more nuanced understanding of risk.
  </p>

  <h2>Building a More Equitable Healthcare Future</h2>
  <p>
    The applications of precision public health extend even further beyond. Perhaps the most promising aspect of precision public health (<em>seriously, I think it’s time the term is abbreviated</em>) is its potential to address healthcare disparities. By understanding genetic variations across different populations, we can develop more effective programmes, create targeted interventions for underserved communities, and allocate resources more effectively to areas of greatest need. This approach moves us closer to achieving health equity, ensuring that advances in genomic medicine benefit all members of society.
  </p>
  <p>
    Looking ahead, the field of precision public health continues to evolve. The integration of artificial intelligence with genomic data analysis promises to unlock new insights, while increasingly sophisticated predictive models will enable more personalised prevention strategies. As these technologies mature, we must ensure they are deployed in ways that promote health equity and improve outcomes for all communities.
  </p>

  <h2>Welcome Aboard</h2>
  <p>
    The fusion of bioinformatics and public health represents more than just technological advancement—it's a fundamental shift in how we approach community health. This transformation requires collaboration across disciplines, bringing together healthcare professionals, researchers, and community leaders to shape the future of public health.
  </p>
  <p>
    As we continue to expand our platform, we welcome collaboration and insights from professionals across the healthcare spectrum. Together, we can build a future where precision public health becomes the standard, not the exception.
  </p>

  <h3>References</h3>
  <p>
    [1] Khoury MJ, et al. (2019). "Beyond Public Health Genomics: Can Big Data and Predictive Analytics Deliver Precision Public Health?" <em>Public Health Genomics</em>, 21(5-6):244-250.
  </p>
  <p>
    [2] National Human Genome Research Institute. (2023). DNA Sequencing Costs: Data.
  </p>
  <p>
    [3] Sturm AC, et al. (2023). "Clinical Genetic Testing for Familial Hypercholesterolaemia." <em>The Lancet Digital Health</em>, 5(1), e23-e34.
  </p>
  <p>
    [4] Roden DM, et al. (2023). "Pharmacogenomics: Current State and Implementation in Clinical Practice." <em>Nature Reviews Genetics</em>.
  </p>
  <p>
    [5] COVID-19 Genomics UK Consortium. (2023). "Genomic Surveillance of SARS-CoV-2: A Field Guide for Implementation."
  </p>
  <p>
    [6] Qatar Genome Programme Research Consortium. (2023). "Whole-Genome Sequencing."
  </p>
</div>




        ),
      };

      if (id === "genomes-to-communities") {
        setBlog(data);
      }
      // Add more conditions or fetch from an API
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        <Header />
        <main className="blog-detail-container">
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
};

export default BlogDetail;