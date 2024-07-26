import React from 'react';
import event1 from '../../images/event1.jpg';
import portaltools1 from '../../images/portaltools1.jpg';
import portaltools2 from '../../images/portaltools2.jpg';
import portaltools3 from '../../images/portaltools3.jpg';
import genomic from '../../images/genomic.jpg';
import vr1 from '../../images/vr1.png'; // Add the uploaded image here
import vr2 from '../../images/vr2.png';
import learning1 from '../../images/learning1.jpg';
import learning2 from '../../images/learning2.jpg';
import learning3 from '../../images/learning3.jpg';
import resource1 from '../../images/resource1.png';
import resource2 from '../../images/resource2.jpg';
import resource3 from '../../images/resource3.jpg';
import livechat from '../../images/livechat.png';
import techsupport from '../../images/techsupport.jpg';
import forums1 from '../../images/forums1.png';
import forums2 from '../../images/forums2.png';
import forums3 from '../../images/forums3.png';



const Virtual = () => {
  return (
    <div>
      <header className="relative">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${event1})`, backgroundPosition: 'center top' }}>
          {/* This div is the header image */}
        </div>
      </header>
      <div className="bg-green-700 py-2 text-white text-2xl font-bold text-center">
        Advanced Features and Virtual Tools
      </div> 

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-center mt-1">AI-Powered Research Portal</h2>
          <p className="text-center mb-8 mt-4 text-lg text-gray-500 font-bold">
            The AI-Powered Research Portal offers advanced AI tools for data analysis, modeling, and simulation.
            These tools enable researchers to derive actionable insights from complex datasets, supporting innovative
            research and development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center mt-4">
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${portaltools1})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Data Analysis</h3>
            </div>
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${portaltools2})`, backgroundSize: 'cover', backgroundPosition: 'left', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Predictive Modeling</h3>
            </div>
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${portaltools3})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Simulation</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-center">Genomic Data Repository</h2>
          <p className="text-center mb-8 mt-4 text-lg text-gray-500 font-bold">
            AGAC's Genomic Data Repository is a secure, cloud-based platform for storing and accessing genomic data.
            It ensures data integrity and facilitates collaboration, allowing researchers to share and analyze data efficiently.
          </p>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/2">
              <img src={genomic} alt="Genomic Data" className="w-180 h-96 ml-10 rounded-md mt-4"/>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <div className="p-4 bg-white rounded-lg shadow mb-4">
                <h3 className="text-xl font-bold mb-2 mt-4">Secure Storage</h3>
                <p className="text-gray-600 text-left">
                  Implementing industry-standard security protocols such as encryption (both in-transit and at-rest), firewall,
                  and intrusion detection systems to safeguard sensitive genomic data.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow mb-4">
                <h3 className="text-xl font-bold mb-2">Data Sharing</h3>
                <p  className="text-gray-600 text-left">
                  Features that allow researchers to share data sets with colleagues, both within and outside their organization.
                  Options for granting temporary access are available.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow mb-4">
                <h3 className="text-xl font-bold mb-2">Search and Retrieval</h3>
                <p  className="text-gray-600 text-left">
                  Full-text search, filtering, and sorting options to help researchers quickly find specific datasets.
                  Search parameters include genomic markers, project names, submission dates, etc.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-center ">Interactive Forums</h2>
          <p className="text-center mb-8 text-lg text-gray-500 font-bold">
            The AI-Powered Research Portal offers advanced AI tools for data analysis, modeling, and simulation.
            These tools enable researchers to derive actionable insights from complex datasets, supporting innovative
            research and development.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center mt-4">
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${forums1})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Discussion Threads</h3>
            </div>
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${forums2})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Topic Categories</h3>
            </div>
            <div className="p-4 border rounded-lg text-center flex flex-col items-center w-80">
              <div className="w-full h-64 mb-4" style={{ backgroundImage: `url(${forums3})`, backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px' }}></div>
              <h3 className="text-xl font-bold mb-2">Real-time Chat</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4 text-center ">Virtual Reality Tours</h2>
          <p className="text-center mb-8 mt-2 text-lg text-gray-500 font-bold">
            Experience the intricacies of aquaculture systems through immersive VR tours.
          </p>
          <div className="flex flex-col gap-8">
            <div className="relative group h-full w-full mt-2">
              <img src={vr1} alt="Immersive Aquaculture Systems" className="w-full h-[500px] object-cover rounded-md"/>
              <div className="absolute inset-0 bg-black opacity-20 flex items-center justify-center rounded-md">
                <button className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  &#9658;
                </button>
              </div>
              <div className="absolute top-0 right-0 p-4 text-white">
                <h3 className="text-4xl font-bold">Immersive <br/> Aquaculture <br/> Systems</h3>
              </div>
            </div>
            <div className="relative group h-full w-full mt-12">
              <img src={vr2} alt="Research Lab Tours" className="w-full h-[510px] object-cover object-top rounded-md"/>
              <div className="absolute inset-0 bg-black opacity-20 flex items-center justify-center rounded-md">
                <button className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  &#9658;
                </button>
              </div>
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-4xl font-bold">Research <br/> Lab <br/>  Tours</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="learning-modules" className="text-center mt-12 py-8">
          <h3 className="text-3xl font-extrabold mb-6">Online Learning Modules</h3>
          <p className="text-center mb-8 mt-4 text-lg text-gray-500 font-bold">
          Explore comprehensive e-learning courses on AI in agriculture, genetic research, and specialized topics. Enhance your knowledge with interactive and in-depth modules designed by experts. <br/> Accessible anytime, anywhere for flexible learning.
          </p>

          <div className="flex flex-col items-center space-y-8">
          
            <div className="flex items-center w-full max-w-4xl">
              <img src={learning1} alt="Media Kit 1" className="w-72 h-72 rounded-full object-cover object-left mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
              <h1 className="font-extrabold text-black text-3xl text-center mb-4"> AI in Agriculture</h1>
                <p className="text-gray-500 mb-2 text-md ml-6 text-left"> Learn how AI can optimize crop yield and reduce waste through predictive analytics and machine learning algorithms. Understand the integration of drone technology in farming to monitor crop health and manage fields efficiently. Explore the use of AI in developing smart irrigation systems that conserve water and maximize crop output.</p>
                <button className="bg-green-600 mt-2 text-white px-5 py-1 rounded hover:bg-green-700 ml-6"> Enroll Now</button>
              </div>
            </div>
            
            <div className="flex items-center w-full max-w-4xl">
              <img src={learning2} alt="Media Kit 2" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
              <h1 className="font-extrabold text-black text-3xl text-center mb-4"> Genetic Research </h1>
                <p className="text-gray-500 mb-2 text-md ml-6 text-left">Understand the basics and applications of CRISPR technology in agriculture to create disease-resistant and high-yield crops. Dive into the world of bioinformatics and learn how to analyze genetic data for agricultural advancements. Explore the principles of plant genetics and breeding techniques to develop improved crop varieties.</p>
                <button className="bg-green-600 mt-2 text-white px-5 py-1 rounded hover:bg-green-700 ml-6"> Enroll Now</button>
              </div>
            </div>
          
            <div className="flex items-center w-full max-w-4xl">
              <img src={learning3} alt="Media Kit 3" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
              <h1 className="font-extrabold text-black text-3xl text-center mb-4">Sustainable Farming Techniques </h1>
                <p className="text-gray-500 mb-2 text-md ml-8 text-left">Study the principles of organic farming and how to implement sustainable practices on your farm. Learn the fundamentals of permaculture and how to design agricultural systems that are sustainable and self-sufficient. Understand the importance of soil health and learn techniques for maintaining and improving soil quality.</p>
                <button className="bg-green-600 mt-2 text-white px-5 py-1 rounded hover:bg-green-700 ml-8"> Enroll Now</button>
              </div>
            </div>
            
          
           </div>
          </section>
          <section id="media-contacts" className="text-center mt-12">
  <h3 className="text-3xl font-extrabold mb-6">Meet our Instructors</h3>
  
  <div className="flex flex-wrap justify-center gap-32">
    {/* Primary Contact */}
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-green-600 p-0 mt-10 h-[380px] w-[320px] flex flex-col">
      <div className= "text-black text-center p-4">
        <h4 className="text-lg font-bold"> Dr. Jane Smith </h4>
      </div>
      <div className="border-b-2 border-green-600"></div> {/* Green line */}
      <div className="p-4 text-left flex-grow">
        <p className="text-gray-500 mt-12">Dr. Jane Smith is a leading expert in the application of artificial intelligence and machine learning in agriculture. With over 15 years of experience in the field, Dr. Smith has been at the forefront of developing innovative AI solutions that enhance farming efficiency and productivity. </p>
      </div>
    </div>
    {/* Secondary Contact */}
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-green-600 p-0 mt-10 h-[380px] w-[320px] flex flex-col">
      <div className=" text-black text-center p-4">
        <h4 className="text-lg font-bold">Dr. John Doe</h4>
      </div>
      <div className="border-b-2 border-green-600"></div> {/* Green line */}
      <div className="p-4 text-left flex-grow">
        <p className="text-gray-500 mt-12">Dr. John Doe is a renowned geneticist with a specialization in CRISPR technology. His groundbreaking research in genetic editing has paved the way for new agricultural innovations, making crops more resilient and productive. He has a Ph.D in Genetics from the University of Chicago.</p>
        
      </div>
    </div>
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-green-600 p-0 mt-10 h-[380px] w-[320px] flex flex-col">
      <div className=" text-black text-center p-4">
        <h4 className="text-lg font-bold">Dr. Emily Davis </h4>
      </div>
      <div className="border-b-2 border-green-600"></div> {/* Green line */}
      <div className="p-4 text-left flex-grow">
        <p className="text-gray-500 mt-12">Dr. Emily Davis is a leading researcher in sustainable farming techniques, with a focus on organic farming, permaculture, and agroforestry. Her work has significantly contributed to the development of sustainable agricultural practices worldwide.</p>
        
      </div>
    </div>
    
  </div>
</section>
<section id="press-releases" className="text-center mt-12">
          <h3 className="text-3xl font-extrabold mb-6">Resource Libarary</h3>
          <p className="text-center mb-10 mt-6 text-lg text-gray-500 font-bold"> Access a wealth of knowledge with our comprehensive Resource Library. Dive deep into research papers, case studies, and technical documents that cover a wide range of topics in AI in agriculture, <br/> genetic research, and sustainable farming techniques.</p>
          <div className="flex flex-wrap justify-center gap-16">
            {/* Row 1 */}
            <div className="flex justify-center w-full gap-40">
              {/* Press Release 1 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[470px] w-[300px] border border-green-600">
                <img src={resource1} alt="Press Release 1" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-black font-extrabold mb-2">Research Papers</div>
                  
                  <p className = "text-sm text-left">Stay updated with the latest research in AI in agriculture, genetic engineering, and sustainable farming practices. Our library includes peer-reviewed papers from leading journals and conferences, providing you with credible and up-to-date information.</p>
                  <button className="bg-green-600 text-white px-6 py-2 rounded mt-6 hover:bg-green-700 ">Access</button>
                </div>
              </div>
              {/* Press Release 2 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[470px] w-[300px] border border-green-600">
                <img src={resource2} alt="Press Release 2" className="w-full h-52 mt-2 object-cover"/>
                <div className="p-4">
                  <div className="text-black font-extrabold mb-2">Case Studies</div>
                  <p className = "text-sm text-left">Explore detailed case studies that illustrate the practical application of AI, genetic research, and sustainable farming techniques. These case studies highlight successful projects and innovations from around the world.</p>
                  
                  
                  <button className="bg-green-600 text-white px-6 py-2 rounded mt-9 hover:bg-green-700">Access</button>
                </div>
              </div>
              {/* Press Release 3 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[470px] w-[300px] border border-green-600 mb-6">
                <img src={resource3} alt="Press Release 3" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-black font-extrabold mb-2">Technical Documents</div>
                  <p className = "text-sm text-left">Gain a deeper understanding of the technical aspects of AI, genetic research, and sustainable farming. Our technical documents include user manuals, technical guides, and white papers that offer detailed explanations and practical tips.</p>
                  
                  <button className="bg-green-600 text-white px-6 py-2 rounded mt-6 hover:bg-green-700">Access</button>
                </div>
              </div>
            </div>
            </div>
            </section>
            <section id="live-chat text-center mt-12"> 
            <h3 className="text-3xl font-extrabold mb-6 text-center mt-6">Live-Chat Support </h3>
            <p className="text-center mb-10 mt-6 text-lg text-gray-500 font-bold">Our Live Chat Support provides real-time assistance to help you navigate the site and utilize its features effectively. Whether you have technical questions, need help with course enrollment,<br/> or require guidance on using our resources, our support team is here to assist you.</p>
            <h3 className="text-2xl font-extrabold mb-6 text-center mt-6">Real-Time Assistance </h3>
            <p className="text-center mb-10 mt-6 text-lg text-gray-500 font-bold">Get immediate help with any issues or questions you have while using the platform.</p>
            </section>
            <section className="py-8">
        <div className="container mx-auto px-4 bg-gray-100">
          <div className="flex justify-center">
          <div className="relative"></div>
            <img src={livechat} alt="Live Chat Support" className=" w-auto h-auto rounded-md mt-1"/>
          </div>
        </div>
      </section>
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center mt-2">Technical Support</h2>
          
          <div className="flex flex-col md:flex-row items-center mb-8">
            <div className="md:w-1/2">
              <img src={techsupport} alt="Genomic Data" className="w-[600px] h-96 ml-10 rounded-md mt-12"/>
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <div className="p-4 bg-white rounded-lg shadow mb-4 mt-8">
                <h3 className="text-xl font-bold mb-2"> Troubleshooting Guides</h3>
                <p  className="text-gray-600 text-left">
                Provides detailed step-by-step instructions and visuals to help users independently resolve common technical issues, enhancing self-service capabilities.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow mb-4">
                <h3 className="text-xl font-bold mb-2">Ticketing System </h3>
                <p  className="text-gray-600 text-left">
                Offers a structured form for users to submit technical issues, with the ability to track ticket status and receive updates on progress and resolution timelines.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow mb-4">
                <h3 className="text-xl font-bold mb-2">Community Forums or Discussion Boards</h3>
                <p  className="text-gray-600">
                Fosters a collaborative environment where users can seek advice, share experiences, and find solutions from peers and experts, promoting community engagement and knowledge sharing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

            
          


    </div>
  );
};

export default Virtual;
