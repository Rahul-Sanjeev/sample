export const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Join thousands of satisfied customers and transform your web presence
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-bold transition duration-300 transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
