import React from 'react';
import event1 from '../../images/event1.jpg'; // Imported image
import event2 from '../../images/event2.jpg';
import event3 from '../../images/event3.jpg';
import event4 from '../../images/event4.jpg';
import event5 from '../../images/event5.png';
import press1 from '../../images/press1.jpg'; // Assuming these are the press release images
import press2 from '../../images/press2.jpg';
import press3 from '../../images/press3.jpg';
import press4 from '../../images/press4.jpg'; // New image
import press5 from '../../images/press5.jpg'; // New image
import press6 from '../../images/press6.jpg'; // New image
import mediakit1 from '../../images/mediakit1.jpg'; // Assuming this is the path of the uploaded image
import mediakit2 from '../../images/mediakit2.jpg'; // Assuming this is the path of the uploaded image // New image
import mediakit3 from '../../images/mediakit3.png'; // Assuming this is the path of the uploaded image
import mediakit4 from '../../images/mediakit4.png';
const News = () => {
  return (
    <div>
      <header className="relative">
        <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url(${event1})`, backgroundPosition: 'center top' }}>
          {/* This div is the header image */}
        </div>
      </header>
      <div className="bg-green-700 py-2 text-white text-2xl font-bold text-center">
        NEWS AND EVENTS
      </div>
      <main className="px-4 py-8">
        <section id="events" className="text-center">
          <h3 className="text-2xl font-extrabold mb-6">EVENTS CALENDAR</h3>
          <div className="space-y-12">
            {/* Conferences */}
            <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-6">
              <img
                src={event2}
                alt="Conferences"
                className="rounded-lg w-full md:w-2/3 h-[330px] object-cover object-top mb-4" // Adjust width and height
              />
              <div className="w-full md:w-2/3 text-left">
                <h4 className="text-2xl font-extrabold mb-2 mt-2">Conferences</h4>
                <p className="text-gray-500 mb-4 mt-3">
                AquaGenetics AI Labs conferences bring together industry leaders, researchers, and practitioners to discuss the latest advancements in AI, genetics, and agriculture. These events highlight important innovations and emerging technologies that are shaping the future of farming. Whether you are looking to learn from experts or share your own research, our conferences are the perfect platform for professional growth and collaboration.
                </p>
                <button className="bg-green-600 mt-2 text-white px-4 py-2 rounded hover:bg-green-700">Register Now</button>
              </div>
            </div>
            {/* Webinars */}
            <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-6">
              <img
                src={event3}
                alt="Webinars"
                className="rounded-lg w-full md:w-2/3 h-[330px] object-cover mb-4" // Adjust width and height
              />
              <div className="w-full md:w-2/3 text-left">
                <h4 className="text-2xl font-extrabold mb-2 mt-2">Webinars</h4>
                <p className="text-gray-500 mb-4 mt-3">
                  Our Webinars offer convenient ways to stay updated on specific topics in AI, genetics, and agriculture from the comfort of your home or office. These virtual sessions feature presentations from leading experts and provide an opportunity to participate in Q&A sessions. Join us to gain valuable insights and stay ahead of emerging trends in the industry.
                </p>
                <button className="bg-green-600 mt-2 text-white px-4 py-2 rounded hover:bg-green-700">Register Now</button>
              </div>
            </div>
            {/* Workshops */}
            <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-6">
              <img
                src={event4}
                alt="Workshops"
                className="rounded-lg w-full md:w-2/3 h-[330px] object-cover mb-4" // Adjust width and height
              />
              <div className="w-full md:w-2/3 text-left">
                <h4 className="text-2xl font-extrabold mb-2 mt-2">Workshops</h4>
                <p className="text-gray-500 mb-4 mt-3">
                AquaGenetics AI Labs workshops provide hands-on training and practical learning experiences designed to deepen your skills in various aspects of AI, genetics, and agriculture. These interactive sessions cover a wide range of topics and offer opportunities to work directly with industry experts. Whether you are new to the field or looking to enhance your knowledge, our workshops offer something for everyone.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2">Register Now</button>
              </div>
            </div>
            {/* Training Sessions */}
            <div className="flex flex-col items-center border-b border-gray-200 pb-6 mb-6">
              <img
                src={event5}
                alt="Training Sessions"
                className="rounded-lg w-full md:w-2/3 h-[330px] object-cover object-top mb-4" // Adjust width and height
              />
              <div className="w-full md:w-2/3 text-left">
                <h4 className="text-2xl font-extrabold mb-2 mt-2">Training Sessions</h4>
                <p className="text-gray-500 mb-4 mt-3">
                  Enhance your skills and knowledge with AquaGenetics AI Labs Training Sessions. These educational programs are designed to provide comprehensive instruction on essential topics in AI, genetics, and aquaculture. Whether you are a beginner or an advanced learner, our training sessions offer valuable resources and expert guidance to help you achieve your professional development goals.
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mt-2">Register Now</button>
              </div>
            </div>
          </div>
        </section>
        <section id="press-releases" className="text-center mt-12">
          <h3 className="text-2xl font-extrabold mb-6">Press Releases</h3>
          <div className="flex flex-wrap justify-center gap-16">
            {/* Row 1 */}
            <div className="flex justify-center w-full gap-16">
              {/* Press Release 1 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press1} alt="Press Release 1" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 1 Comment</p>
                  <h4 className="text-lg font-bold mb-2">Revolutionizing Sustainable Agriculture: New Findings in Aquaponics</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700 ">Read more</button>
                </div>
              </div>
              {/* Press Release 2 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press2} alt="Press Release 2" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 0 Comments</p>
                  <h4 className="text-lg font-bold mb-2">AquaGenetics AI Labs and Global Partners Join Forces for Aquaponics Advancement</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700">Read more</button>
                </div>
              </div>
              {/* Press Release 3 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press3} alt="Press Release 3" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 0 Comments</p>
                  <h4 className="text-lg font-bold mb-2">Highlights from the Annual Aquaponics Conference</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-9 hover:bg-green-700">Read more</button>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className="flex justify-center w-full gap-16 mt-8">
              {/* Press Release 4 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press4} alt="Press Release 4" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 1 Comment</p>
                  <h4 className="text-lg font-bold mb-2">New Breakthroughs in Aquaponics Technology</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-9 hover:bg-green-700">Read more</button>
                </div>
              </div>
              {/* Press Release 5 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press5} alt="Press Release 5" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 2 Comments</p>
                  <h4 className="text-lg font-bold mb-2">AquaGenetics AI Labs receives Prestigious Award for Innovation</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700">Read more</button>
                </div>
              </div>
              {/* Press Release 6 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden h-[450px] w-[300px] border border-green-600">
                <img src={press6} alt="Press Release 6" className="w-full h-52 object-cover"/>
                <div className="p-4">
                  <div className="text-green-600 font-semibold mb-2">05 July 2022</div>
                  <p className="text-gray-500 mb-4">by Kevin Martin | 3 Comments</p>
                  <h4 className="text-lg font-bold mb-2">Upcoming Events and Initiatives in Sustainable Agriculture</h4>
                  <button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700">Read more</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="rss-feed" className="text-center mt-12">
  <h3 className="text-2xl font-extrabold mb-6">RSS Feed</h3>
  <div className="bg-white rounded-lg shadow-md p-8 border border-green-700 max-w-6xl mx-auto">
    <p className="text-gray-500 mb-4 text-lg">
      Stay updated with the latest news, events, and updates from AquaGenetics AI Labs by subscribing to our RSS feed. Our RSS feed delivers real-time updates straight to your feed reader, ensuring you never miss an important announcement or publication.
    </p>
    <p className="text-gray-500 mb-4 text-md">
      To subscribe, click on the link below and add it to your RSS reader:
    </p>
    <a
      href="https://www.aquageneticsai.com/rss-feed.xml"
      className="text-green-600 text-md hover:underline"
    >
      Subscribe to our RSS Feed
    </a>
  </div>
</section>

        <section id="media-assets" className="text-center mt-12">
          <h3 className="text-2xl font-extrabold mb-6">Media Assets</h3>
          <div className="flex flex-col items-center space-y-8">
            {/* Media Kit 1 */}
            <div className="flex items-center w-full max-w-4xl">
              <img src={mediakit1} alt="Media Kit 1" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
                <p className="text-gray-500 mb-2 text-lg ml-6"> Download high-resolution photos of our latest product launch event and our company logo.</p>
                <a href="https://www.example.com/media-kit" className="text-green-600 ml-6">Download Links : https://www.example.com/media-kit</a>
              </div>
            </div>
            {/* Media Kit 2 */}
            <div className="flex items-center w-full max-w-4xl">
              <img src={mediakit2} alt="Media Kit 2" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
                <p className="text-gray-500 mb-2 text-lg ml-6">Access our official videos featuring interviews with our CEO, product demos, and footage from our latest campaigns.</p>
                <a href="https://www.example.com/media-kit" className="text-green-600 ml-6">Download Links : https://www.example.com/media-kit</a>
              </div>
            </div>
            {/* Media Kit 3 */}
            <div className="flex items-center w-full max-w-4xl">
              <img src={mediakit3} alt="Media Kit 3" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
                <p className="text-gray-500 mb-2 text-lg ml-8">Download infographics showcasing our impact metrics, timelines of key milestones, and process diagrams.</p>
                <a href="https://www.example.com/media-kit" className="text-green-600 ml-8">Download Links : https://www.example.com/media-kit</a>
              </div>
            </div>
            {/* Media Kit 4 */}
            <div className="flex items-center w-full max-w-4xl">
              <img src={mediakit4} alt="Media Kit 4" className="w-72 h-72 rounded-full object-cover mr-4 border border-black"/> {/* Increased dimensions */}
              <div className="text-left">
                <p className="text-gray-500 mb-2 text-lg ml-6">Download social media graphics and banners featuring our latest campaigns or events.</p>
                <a href="https://www.example.com/media-kit" className="text-green-600 ml-6">Download Links : https://www.example.com/media-kit</a>
              </div>
            </div>
           </div>
          </section>
          <section id="media-contacts" className="text-center mt-12">
  <h3 className="text-2xl font-extrabold mb-6">Media Contacts</h3>
  <p className="font-medium text-center text-gray-500 text-lg">
    For any media inquiries, please reach out to our media relations team.
  </p>
  <div className="flex flex-wrap justify-center gap-32">
    {/* Primary Contact */}
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-green-600 p-0 mt-10 h-[380px] w-[320px] flex flex-col">
      <div className="bg-green-600 text-white text-center p-4">
        <h4 className="text-lg font-bold">Primary Contact</h4>
      </div>
      <div className="border-b-4 border-green-600"></div> {/* Green line */}
      <div className="p-4 text-left flex-grow">
        <p className="text-gray-500 mt-16">John Doe</p>
        <p className="text-gray-500">Director of Public Relations</p>
        <p className="text-gray-500">Email: john.doe@example.com</p>
        <p className="text-gray-500">Phone: (123) 456-7890</p>
      </div>
    </div>
    {/* Secondary Contact */}
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden border border-green-600 p-0 mt-10 h-[380px] w-[320px] flex flex-col">
      <div className="bg-green-600 text-white text-center p-4">
        <h4 className="text-lg font-bold">Secondary Contact</h4>
      </div>
      <div className="border-b-4 border-green-600"></div> {/* Green line */}
      <div className="p-4 text-left flex-grow">
        <p className="text-gray-500 mt-16">Jane Smith</p>
        <p className="text-gray-500">Assistant Director of Public Relations</p>
        <p className="text-gray-500">Email: jane.smith@example.com</p>
        <p className="text-gray-500">Phone: (123) 456-7891</p>
      </div>
    </div>
    
  </div>
</section>



      </main>
    </div>
    
  );
};

export default News;
