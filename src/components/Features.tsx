export const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      description:
        "Built with Vite for ultra-fast load times and development experience",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description:
        "Stunning UI components crafted with Tailwind CSS and modern design principles",
    },
    {
      icon: "📱",
      title: "Fully Responsive",
      description: "Perfect experience on desktop, tablet, and mobile devices",
    },
    {
      icon: "🔒",
      title: "Secure",
      description:
        "Built with security best practices and modern web standards",
    },
    {
      icon: "♿",
      title: "Accessible",
      description: "WCAG compliant and designed for all users",
    },
    {
      icon: "🚀",
      title: "SEO Optimized",
      description: "Fully optimized for search engines and user experience",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Amazing Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes our platform stand out from the rest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8 hover:scale-105 transform"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
