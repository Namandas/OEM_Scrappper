const testimonials = [
    {
      name: 'John Doe',
      text: 'This platform helped our company stay updated with the latest security threats!',
    },
    {
      name: 'Jane Smith',
      text: 'We feel more secure knowing we are constantly informed about vulnerabilities.',
    },
  ];
  
  const TestimonialsSection = () => {
    return (
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"This site has been a game changer for monitoring vulnerabilities in real-time."</p>
              <h3 className="text-red-500 font-semibold">- Jane Doe, Security Engineer</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"Thanks to these alerts, we were able to mitigate threats before they became incidents."</p>
              <h3 className="text-red-500 font-semibold">- John Smith, IT Manager</h3>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">"A must-have tool for anyone serious about security."</p>
              <h3 className="text-red-500 font-semibold">- Alex Johnson, System Administrator</h3>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default TestimonialsSection;
  