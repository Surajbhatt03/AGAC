<<<<<<< HEAD
import React from 'react';
import '../styles/services.css';

const servicesData = [
  {
    title: 'Consulting Services:',
    items: ['Genetic Analysis and Biomarker identification', 'AI optimization in Aquaculture'],
  },
  {
    title: 'Custom Research:',
    items: ['Personalized Nutrition Plans', 'Disease Resistance in Aquatic species'],
  },
  {
    title: 'Training Programs:',
    items: ['AI in agriculture', 'Genetic Research Techniques', 'Aquaculture Best practices'],
  },
  {
    title: 'Precision Nutrition System:',
    items: ['Genetic Screening', 'Personalized Recommendations', 'Ongoing Monitoring'],
  },
];


const Services = () => {
  return (
    <>
    <div className="aquaculture-container">
      <header className="header">
     
      <div className="col-md-12">
      <img src=".\images\Services1..png" alt="Services1" />
        </div>
        
      </header>
      <section className="aquaculture-section">
        <div className="content">
          <h2 class="whatwedo">What We Do</h2>
          <h3>Aquaculture Solutions</h3>
          <div className="services">
            {servicesData.map((service, index) => (
              <div key={index} className="service">
                <h4>{service.title}</h4>
                <ul>
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="image">
          <img src=".\images\Services2.png" alt="Services2" />
        </div>
      </section>
    </div>
 


    
    <div className="container">
      <div className="row">
       
          <div className="card">
            <img src=".\images\Services3.png" className="card-img-top" alt="Services3" />
            <div className="card-body">
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">Businesses and academic institutions can engage AGAC for custom research projects tailored to their specific needs and objectives. Our multidisciplinary team collaborates closely with clients to design and execute research that delivers impactful results.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            
          </div>
        </div>
       
          <div className="card">
            <img src=".\images\Services4.png" className="card-img-top" alt="Services4" />
            <div className="card-body">
              <h5 className="card-title">Custom Research</h5>
              <p className="card-text">Businesses and academic institutions can engage AGAC for custom research projects tailored to their specific needs and objectives. Our multidisciplinary team collaborates closely with clients to design and execute research that delivers impactful results.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
        
       
          <div className="card">
            <img src=".\images\Services5.png" className="card-img-top" alt="Services5" />
            <div className="card-body">
              <h5 className="card-title">Training Programs</h5>
              <p className="card-text">AGAC provides a range of training programs, including workshops, seminars, and online courses. These programs educate professionals on the latest developments in AI, genetic research, and aquaculture techniques, supporting continuous learning and skill development.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
   
       
          <div className="card">
            <img src=".\images\Services6.png" className="card-img-top" alt="Services6" />
            <div className="card-body">
              <h5 className="card-title">Precision Nutrition System</h5>
              <p className="card-text">The Precision Nutrition System™ uses genetic and health data to develop personalized nutrition plans. These plans aim to optimize individual health outcomes by recommending dietary adjustments based on genetic predispositions and health conditions.</p>
              <a href="#" className="btn btn-primary">Read More</a>
            </div>
          </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <img src=".\images\Services7.png" className="img-fluid" alt="Services7" />
        </div>
      </div>
      <div className="row mt-12">
        <div className="col-md-12">
          <div className="bg-success text-center p-5">
            <h1 className="text-light">We're popular in aquaponics market globally</h1>
            <a href="#" className="btn btn-warning mt-3">Discover More</a>
=======
import '../styles/Services.css'


export default function Services() {
  return (
    <div className="services">
      <div className="container-14">
        <div className="section">
          <div className="elements">
            <span className="logo-1">
              Logo
            </span>
          </div>
          <div className="elements-1">
            <div className="div-elementor-widget-container-1">
              <div className="link-icon">
                <img className="vector-9" src="assets/vectors/Vector17_x2.svg" />
              </div>
              <div className="link-icon-1">
                <img className="vector-10" src="assets/vectors/Vector12_x2.svg" />
              </div>
              <div className="link-icon-2">
                <img className="vector-11" src="assets/vectors/Vector2_x2.svg" />
              </div>
              <div className="link-icon-3">
                <img className="vector-12" src="assets/vectors/Vector19_x2.svg" />
              </div>
            </div>
            <div className="div-elementor-widget-container-2">
              <div className="container-7">
                <div className="symbol">
                  
                </div>
                <div className="container">
                  +1-800-123-4567
                </div>
              </div>
              <span className="heading-3-call-anytime">
                (Available 9 AM - 5 PM EST)
              </span>
            </div>
            <div className="div-elementor-widget-container-3">
              <div className="symbol-1">
                
              </div>
              <div className="container-2">
                <span className="heading-3-send-email">
                  Send email
                </span>
                <span className="example-com">
                  example.com
                </span>
              </div>
            </div>
            <div className="div-elementor-widget-container-4">
              <span className="symbol-2">
                
              </span>
              <div className="container-11">
                <div className="heading-3380-st-kilda-road">
                  address: 
                </div>
                <span className="dallas-united-states-1">
                  Dallas , United states
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="divfeatured-title">
          <div className="div-breadcrumb-trail">
            <span className="link-home">
              Home
            </span>
            <div className="link-5">
              /
            </div>
            <span className="services-2">
              Services
            </span>
          </div>
          <div className="div-title-group">
            <span className="heading-1-services">
              Services
            </span>
          </div>
        </div>
        <div className="frame">
          <div className="container-4">
            <div className="div-elementor-column-2">
              <div className="div-master-shape">
              </div>
            </div>
            <p className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring">
              <span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-48"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-47"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-14"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-0"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-52"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-51"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-14"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-54"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-14"></span><span className="consulting-services-genetic-analysis-and-biomarker-identification-ai-optimization-in-aquaculture-custom-research-personalized-nutrition-plans-disease-resistance-in-aquatic-species-training-programs-ai-in-agriculture-genetic-research-techniques-aquaculture-best-practices-precision-nutrition-system-genetic-screening-personalized-recommendations-ongoing-monitoring-sub-56"></span><span></span>
            </p>
          </div>
          <div className="image-24">
          </div>
        </div>
        <div className="frame-1">
          <div className="section-1">
            <div className="div-elementor-column-5">
              <span className="heading-2-agriculture">
                Agriculture<br />
                Matters to the<br />
                Future of<br />
                Development
              </span>
            </div>
            <div className="div-elementor-column-6">
              <div className="div-elementor-element-8">
                <span className="watch-our-video">
                  Watch our video
                </span>
              </div>
              <div className="div-elementor-element-7">
                <div className="link-video">
                  <div className="span-h-2-dbb-3-e-89-fc">
                  </div>
                  <div className="span-h-2-dcf-2-b-81-a">
                  </div>
                  <div className="icon-7">
                    <img className="vector-13" src="assets/vectors/Vector6_x2.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-3">
            <div className="div-elementor-column-7">
              <div className="div-master-image-box">
                <div className="container-5">
                  <div className="div-thumb">
                    <div className="screenshot-202407092332221">
                    </div>
                  </div>
                  <p className="consulting-businesses-and-academic-institutions-can-engage-agac-for-custom-research-projects-tailored-to-their-specific-needs-and-objectives-our-multidisciplinary-team-collaborates-closely-with-clients-to-design-and-execute-research-that-delivers-impactful-results">
                    <span className="consulting-businesses-and-academic-institutions-can-engage-agac-for-custom-research-projects-tailored-to-their-specific-needs-and-objectives-our-multidisciplinary-team-collaborates-closely-with-clients-to-design-and-execute-research-that-delivers-impactful-results-sub-2"></span><span className="consulting-businesses-and-academic-institutions-can-engage-agac-for-custom-research-projects-tailored-to-their-specific-needs-and-objectives-our-multidisciplinary-team-collaborates-closely-with-clients-to-design-and-execute-research-that-delivers-impactful-results-sub-4"></span><span></span>
                  </p>
                  <div className="link">
                    <span className="read-more">
                      Read More
                    </span>
                  </div>
                </div>
                <div className="div-content-wrap">
                </div>
              </div>
              <div className="div-elementor-column-8">
                <div className="div-master-image-box-1">
                  <div className="div-thumb-1">
                    <div className="service-02-webp">
                    </div>
                  </div>
                </div>
                <div className="link-1">
                  <span className="read-more-1">
                    Read More
                  </span>
                </div>
                <div className="div-content-wrap-1">
                  <p className="custom-research-businesses-and-academic-institutions-can-engage-agac-for-custom-research-projects-tailored-to-their-specific-needs-and-objectives-our-multidisciplinary-team-collaborates-closely-with-clients-to-design-and-execute-research-that-delivers-impactful-results">
                    <span className="custom-research-businesses-and-academic-institutions-can-engage-agac-for-custom-research-projects-tailored-to-their-specific-needs-and-objectives-our-multidisciplinary-team-collaborates-closely-with-clients-to-design-and-execute-research-that-delivers-impactful-results-sub-0"></span><span></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="div-elementor-column-9">
              <div className="div-master-image-box-2">
                <div className="div-thumb-2">
                  <div className="service-03-webp">
                  </div>
                </div>
              </div>
              <div className="training-programs">
                Training Programs 
              </div>
              <div className="div-content-wrap-2">
                <p className="agac-provides-arange-of-training-programs-including-workshops-seminars-and-online-courses-these-programs-educate-professionals-on-the-latest-developments-in-ai-genetic-research-and-aquaculture-techniques-supporting-continuous-learning-and-skill-development">
                  <span className="agac-provides-arange-of-training-programs-including-workshops-seminars-and-online-courses-these-programs-educate-professionals-on-the-latest-developments-in-ai-genetic-research-and-aquaculture-techniques-supporting-continuous-learning-and-skill-development-sub-3"></span><span></span>
                </p>
              </div>
              <div className="div-master-decor">
                <div className="link-2">
                  <span className="read-more-2">
                    Read More
                  </span>
                </div>
              </div>
            </div>
            <div className="div-elementor-column-11">
              <div className="container-1">
                <div className="div-master-image-box-3">
                  <div className="div-content-wrap-3">
                    <span className="heading-3-dairy">
                      Precision Nutrition System<br />
                       
                    </span>
                  </div>
                  <div className="screenshot-202407100032281">
                  </div>
                </div>
                <div className="div-master-decor-1">
                  <div className="link-3">
                    <span className="read-more-3">
                      Read More
                    </span>
                  </div>
                </div>
              </div>
              <span className="the-precision-nutrition-system-uses-genetic-and-health-data-to-develop-personalized-nutrition-plans-these-plans-aim-to-optimize-individual-health-outcomes-by-recommending-dietary-adjustments-based-on-genetic-predispositions-and-health-conditions">
                The Precision Nutrition System™ uses genetic and health data to develop personalized nutrition plans. These plans aim to optimize individual health outcomes by recommending dietary adjustments based on genetic predispositions and health conditions.
              </span>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="watch-video">
            <span className="watch-video-sub-2"></span><span></span>
          </p>
        </div>
        <div className="frame-2">
          <div className="farm-green-webp">
          </div>
          <div className="section-2">
            <div className="div-elementor-column-10">
              <div className="div-pre-heading">
                <span className="aquaponics-market-leaders">
                  Aquaponics Market Leaders
                </span>
              </div>
              <div className="heading-22">
                <span className="were-popular-in-aquaponics-market-globally">
                  We’re  popular in aquaponics market globally
                </span>
              </div>
            </div>
            <div className="div-elementor-column-12">
              <div className="link-4">
                <span className="discover-more">
                  Discover More
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="group-8">
          <div className="footer-section-1">
            <div className="image">
            </div>
            <div className="section-4">
              <div className="div-elementor-column-15">
                <div className="div-elementor-element-9">
                  <span className="agac-offers-comprehensive-support-for-all-platform-users">
                    AGAC offers comprehensive support for all platform users.
                  </span>
                </div>
                <div className="div-master-social-icons">
                  <div className="link-icon-4">
                    <img className="vector-20" src="assets/vectors/Vector11_x2.svg" />
                  </div>
                  <div className="link-icon-5">
                    <img className="vector-21" src="assets/vectors/Vector10_x2.svg" />
                  </div>
                  <div className="link-icon-6">
                    <img className="vector-22" src="assets/vectors/Vector3_x2.svg" />
                  </div>
                  <div className="link-icon-7">
                    <img className="vector-23" src="assets/vectors/Vector21_x2.svg" />
                  </div>
                </div>
              </div>
              <div className="div-elementor-column-16">
                <div className="heading-23">
                  <span className="explore">
                    Explore
                  </span>
                </div>
                <div className="div-elementor-element-10">
                  <div className="span-elementor-divider-separator-1">
                    <div className="after-2">
                    </div>
                  </div>
                </div>
                <div className="div-master-list">
                  <div className="container-3">
                    <div className="icon-13">
                      <img className="vector-24" src="assets/vectors/Vector13_x2.svg" />
                    </div>
                    <span className="link-about">
                      About
                    </span>
                  </div>
                  <div className="container-12">
                    <div className="icon">
                      <img className="vector" src="assets/vectors/Vector9_x2.svg" />
                    </div>
                    <span className="link-services">
                      Services
                    </span>
                  </div>
                  <div className="container-10">
                    <div className="icon-1">
                      <img className="vector-1" src="assets/vectors/Vector4_x2.svg" />
                    </div>
                    <span className="link-our-projects">
                      Our Projects
                    </span>
                  </div>
                  <div className="container-15">
                    <div className="icon-2">
                      <img className="vector-2" src="assets/vectors/Vector15_x2.svg" />
                    </div>
                    <span className="link-meet-the-farmers">
                      Meet the Farmers
                    </span>
                  </div>
                  <div className="container-9">
                    <div className="icon-3">
                      <img className="vector-3" src="assets/vectors/Vector8_x2.svg" />
                    </div>
                    <span className="link-latest-news">
                      Latest News
                    </span>
                  </div>
                  <div className="container-13">
                    <div className="icon-4">
                      <img className="vector-4" src="assets/vectors/Vector24_x2.svg" />
                    </div>
                    <span className="link-contact">
                      Contact
                    </span>
                  </div>
                </div>
              </div>
              <div className="div-elementor-column">
                <div className="heading-2">
                  <div className="news">
                    News
                  </div>
                  <div className="container-8">
                    <div className="after">
                    </div>
                    <div className="before">
                    </div>
                  </div>
                </div>
                <div className="list">
                  <div className="item">
                    <span className="heading-3-link-bringing-food-production">
                      Bringing Food Production<br />
                      Back To Cities
                    </span>
                    <span className="july-52022">
                      July 5, 2022
                    </span>
                  </div>
                  <div className="item-1">
                    <div className="heading-3-link-the-future-of-farming">
                      The Future of Farming,<br />
                      Smart Irrigation Solutions
                    </div>
                    <span className="july-520221">
                      July 5, 2022
                    </span>
                  </div>
                </div>
              </div>
              <div className="div-elementor-column-1">
                <div className="heading-21">
                  <span className="contact">
                    Contact
                  </span>
                </div>
                <div className="div-elementor-element">
                  <div className="span-elementor-divider-separator">
                    <div className="after-1">
                    </div>
                  </div>
                </div>
                <div className="container-6">
                  <div className="div-elementor-element-1">
                    <img className="vector-5" src="assets/vectors/Vector23_x2.svg" />
                  </div>
                  <span className="available-9-am-5-pm-est">
                    +1-800-123-4567 <br />
                    (Available 9AM - 5 PM EST )
                  </span>
                </div>
                <div className="div-elementor-element-2">
                  <div className="icon-5">
                    <img className="vector-6" src="assets/vectors/Vector14_x2.svg" />
                  </div>
                  <span className="supportagac-com">
                    support@agac.com
                  </span>
                </div>
                <div className="div-elementor-element-3">
                  <div className="icon-6">
                    <img className="vector-7" src="assets/vectors/Vector18_x2.svg" />
                  </div>
                  <span className="dallas-united-states">
                    Dallas, United States
                  </span>
                </div>
                <div className="form">
                  <span className="your-email-address">
                    Your Email Address
                  </span>
                  <div className="input">
                    <span className="your-email-address">
                      Your Email Address
                    </span>
                  </div>
                  <div className="button-submit">
                    <img className="vector-8" src="assets/vectors/Vector16_x2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <span className="logo">
              Logo
            </span>
          </div>
          <div className="footer-section">
            <div className="div-elementor-column-3">
              <span className="all-copyright-2024-by">
                © All Copyright 2024 by 
              </span>
              <span className="link-tplabs-co">
                AGAC
              </span>
            </div>
            <div className="div-elementor-column-4">
              <div className="div-elementor-element-4">
                <span className="link-terms-of-use">
                  Terms of Use
                </span>
              </div>
              <div className="div-elementor-element-5">
                <div className="div-elementor-widget-container">
                  <span className="link-privacy-policy">
                    Privacy Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-elementor-element-6">
        <span className="heading-2-healthy-food-for-good">
          Aquaculture Solutions
        </span>
        <span className="what-we-do">
          What We Do<br />
          
        </span>
      </div>
      <div className="section-3">
        <div className="div-elementor-column-13">
          <div className="nav-list-item-link">
            <span className="home">
              Home
            </span>
            <div className="icon-8">
              <img className="vector-14" src="assets/vectors/Vector_x2.svg" />
            </div>
          </div>
          <div className="nav-list-item-link-1">
            <span className="about">
              About
            </span>
          </div>
          <div className="nav-list-item-link-2">
            <span className="services-1">
              Services
            </span>
            <div className="icon-9">
              <img className="vector-15" src="assets/vectors/Vector20_x2.svg" />
            </div>
          </div>
          <div className="nav-list-item-link-3">
            <span className="projects">
              Projects
            </span>
            <div className="icon-10">
              <img className="vector-16" src="assets/vectors/Vector1_x2.svg" />
            </div>
          </div>
          <div className="nav-list-item-link-4">
            <span className="news-1">
              News
            </span>
            <div className="icon-11">
              <img className="vector-17" src="assets/vectors/Vector7_x2.svg" />
            </div>
          </div>
          <div className="nav-list-item-link-5">
            <span className="shop">
              Shop
            </span>
            <div className="icon-12">
              <img className="vector-18" src="assets/vectors/Vector5_x2.svg" />
            </div>
          </div>
          <div className="nav-list-item-link-6">
            <span className="contact-1">
              Contact
            </span>
          </div>
        </div>
        <div className="div-elementor-column-14">
          <div className="div-elementor-widget-container-5">
            <img className="vector-19" src="assets/vectors/Vector22_x2.svg" />
>>>>>>> ed50d692ec172885c77096e740fb834c5088b7ab
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  
</>
 );
};




export default Services;
=======
  )
}
>>>>>>> ed50d692ec172885c77096e740fb834c5088b7ab
