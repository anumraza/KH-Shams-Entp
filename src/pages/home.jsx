import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import "./style.css";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import { useState, useEffect } from "react"
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";


export function Home() {
  // Updated process steps for packaging company
  const packagingProcess = [
    {
      title: "Consultation & Requirements Analysis",
      desc: `We begin with a comprehensive assessment of your packaging needs, product specifications, and business goals to identify the optimal packaging solutions.`,
      color: "bg-yellow-50",
    },
    {
      title: "Design & Prototyping",
      desc: `Our design team creates custom packaging concepts that balance aesthetics, functionality, and cost-effectiveness, producing prototypes for your approval.`,
      color: "bg-purple-50",
    },
    {
      title: "Material Selection & Sourcing",
      desc: `We help select the most appropriate materials based on your product requirements, sustainability goals, and budget constraints.`,
      color: "bg-blue-50",
    },
    {
      title: "Production & Quality Control",
      desc: `Our manufacturing facilities produce your packaging with strict quality control measures to ensure consistency and reliability.`,
      color: "bg-orange-50",
    },
    {
      title: "Delivery & Ongoing Support",
      desc: `We manage timely delivery of your packaging and provide ongoing support for reorders, modifications, and new product launches.`,
      color: "bg-green-50",
    },
  ];

  const customSolutions = [
    {
      stage: "01",
      title: "Needs Assessment",
      desc: "Detailed analysis of your product specifications, shipping requirements, and branding needs to determine optimal packaging solutions.",
      color: "bg-blue-50",
    },
    {
      stage: "02",
      title: "Design Development",
      desc: "Creation of custom packaging designs that protect your product, enhance brand recognition, and provide excellent unboxing experiences.",
      color: "bg-green-50",
    },
    {
      stage: "03",
      title: "Material Consultation",
      desc: "Expert guidance on selecting the right materials that balance protection, sustainability, and cost considerations.",
      color: "bg-yellow-50",
    },
    {
      stage: "04",
      title: "Prototype Testing",
      desc: "Rigorous testing of packaging prototypes to ensure they meet durability, functionality, and aesthetic requirements.",
      color: "bg-orange-50",
    },
    {
      stage: "05",
      title: "Production & Fulfillment",
      desc: "Efficient manufacturing and timely delivery of your custom packaging solutions with consistent quality control.",
      color: "bg-purple-50",
    },
  ];

  const services = [
    {
      title: "Supply Chain Management",
      desc: `We coordinate with reliable suppliers to ensure timely delivery of materials and manage inventory to prevent production delays.`,
      color: "bg-yellow-100",
    },
    {
      title: "Quality Assurance",
      desc: `Implementation of strict quality control measures at every production stage to maintain consistency and meet client specifications.`,
      color: "bg-purple-50",
    },
    {
      title: "Sustainable Solutions",
      desc: `Development of eco-friendly packaging options using recycled materials and implementing waste reduction practices.`,
      color: "bg-blue-50",
    },
    {
      title: "Logistics & Distribution",
      desc: `Efficient coordination of packaging delivery to ensure your products reach you on schedule and in perfect condition.`,
      color: "bg-orange-50",
    },
    {
      title: "Continuous Innovation",
      desc: `Regular review of packaging performance and incorporation of new technologies and materials to improve functionality and reduce costs.`,
      color: "bg-green-50",
    },
  ];

  // Updated packaging-related images
  const images = [
    {
      url: "/KH-Shams-Entp/img/pexels-tiger-lily-4481260.jpg",
      title: "CUSTOM PACKAGING SOLUTIONS",
      subtitle: "Tailored to your specific product requirements"
    },
    {
      url: "/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_f325106e.jpg",
      title: "SUSTAINABLE MATERIALS",
      subtitle: "Eco-friendly options for environmentally conscious brands"
    },
    {
      url: "/KH-Shams-Entp/img/package-1511683_1280.jpg",
      title: "QUALITY MANUFACTURING",
      subtitle: "Precision production with rigorous quality control"
    },

    {
      url: "/KH-Shams-Entp/img/empty-boxes-on-table.jpg",
      title: "QUALITY MANUFACTURING",
      subtitle: "Precision production with rigorous quality control"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true); // State to control auto-slide

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showSlide = (index) => {
    setCurrent(index);
    setAutoSlide(false); // Pause auto-slide when user manually selects a slide
    // Restart auto-slide after a delay
    setTimeout(() => setAutoSlide(true), 5000);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [autoSlide]); // Re-run when autoSlide changes


  // Resume auto-slide when user leaves slider
  const handleMouseLeave = () => {
    setAutoSlide(true);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    needs: '',
    message: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Form submitted! We\'ll get back to you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      company: '',
      needs: '',
      message: '',
      terms: false
    });
  };

  return (
    <>
      {/* Enhanced Hero Section */}
      <div
        className="relative flex h-screen content-center items-center justify-center pt-16 pb-32 overflow-hidden"
        onMouseLeave={handleMouseLeave}
      >
        {/* Slider Background */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={image.url}
              className="w-full h-full object-cover"
              alt={`Slide ${index}`}
              loading="eager"
            />
          </div>
        ))}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

        {/* Text Content with Animation */}
        <div className="max-w-6xl container relative mx-auto px-4 z-10">
          <div className="flex items-center justify-center">
            <div className="w-full px-4 text-center">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 md:mb-6 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl px-2 animate-fade-in-up"
              >
                {images[current].title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="opacity-95 text-lg sm:text-xl md:text-2xl lg:text-3xl px-4 font-light animate-fade-in-up delay-150"
              >
                {images[current].subtitle}
              </Typography>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                <Link to="/contactUs">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
                    Contact Us
                  </Button>
                </Link>

                <Link to="/products">
                  <Button
                    variant="outlined"
                    className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/60 z-20 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white p-3 rounded-full hover:bg-black/60 z-20 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => showSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
          <ChevronDownIcon className="w-6 h-6 text-white/80" />
        </div>
      </div>

      {/* Enhanced Features Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 px-4 py-20 lg:py-28">
        {/* Background Pattern */}
        <div className="text-center mb-16 relative">
          {/* Background decorative elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-orange-100 rounded-full opacity-40 blur-xl"></div>
          <div className="absolute bottom-5 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-30 blur-xl"></div>

          <Typography variant="h2" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
            Why Choose KH Shams Enterprise?
          </Typography>
          <Typography variant="lead" className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Delivering excellence in packaging solutions with innovation, quality, and reliability
          </Typography>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {featuresData.map(({ color, title, icon, description }, index) => (
            <div
              key={title}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Main Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 hover:border-blue-300/50 h-full transform hover:-translate-y-3 relative overflow-hidden">

                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-current opacity-5 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 bg-current opacity-5 rounded-full"></div>
                </div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${color}-500 to-${color}-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden group-hover:shadow-xl`}>
                    {React.createElement(icon, {
                      className: "w-8 h-8 text-white relative z-10",
                    })}
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </div>
                </div>

                {/* Content */}
                <Typography
                  variant="h5"
                  className="mb-4 font-bold text-lg lg:text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10"
                >
                  {title}
                </Typography>

                <Typography className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {description}
                </Typography>

                {/* Hover Arrow Indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>

              {/* Floating particles */}
              <div className="absolute -z-10 top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
              <div className="absolute -z-10 bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 group-hover:animate-pulse"></div>
              <div className="absolute -z-10 top-1/2 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"></div>
            </div>
          ))}
        </div>
        {/* About Section */}
        <div id="about" className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-6/12">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg mb-6">
                <BuildingStorefrontIcon className="w-10 h-10 text-white" />
              </div>
              <Typography variant="h2" className="mb-4 font-bold text-gray-900">
                About KH Shams Enterprise
              </Typography>
              <Typography className="text-lg text-gray-700 leading-relaxed mb-8">
                KH Shams Enterprise is a leading manufacturer of custom packaging solutions,
                delivering high-quality, innovative packaging products tailored to our clients'
                specific needs. With state-of-the-art manufacturing facilities and a team of
                experienced packaging experts, we provide end-to-end packaging solutions that
                protect products, enhance brand presence, and optimize logistics.
              </Typography>
            </div>

            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Custom Packaging Design & Manufacturing",
                  color: "bg-blue-600",
                  icon: "🎨"
                },
                {
                  number: "02",
                  title: "Sustainable Packaging Solutions",
                  color: "bg-green-600",
                  icon: "🌱"
                },
                {
                  number: "03",
                  title: "Supply Chain & Logistics Optimization",
                  color: "bg-orange-500",
                  icon: "🚚"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className={`${item.color} text-white rounded-lg w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                    {item.number}
                  </div>
                  <div className="flex-1">
                    <Typography variant="h6" className="font-semibold text-gray-900 mb-1">
                      {item.title}
                    </Typography>
                    <Typography className="text-gray-600 text-sm">
                      {item.description}
                    </Typography>
                  </div>
                  <span className="text-2xl">{item.icon}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  alt="KH Shams Enterprise Packaging"
                  src="/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 14.25.18_2092db2f.jpg"
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <Typography variant="h3" className="text-blue-600 font-bold mb-1">
                    15+
                  </Typography>
                  <Typography variant="small" className="text-gray-600">
                    Years Experience
                  </Typography>
                </div>
              </div>

              {/* Accreditation Badge */}
              <div className="absolute -top-4 -left-4 bg-green-100 rounded-full p-3 shadow-lg">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <ShieldCheckIcon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Feature Card */}
            <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
              <Typography variant="h5" className="font-bold mb-3">
                Premium Packaging Services
              </Typography>
              <Typography className="text-blue-100">
                At KH Shams Enterprise, we follow a client-focused approach to deliver
                innovative packaging solutions. Our methodology is built on understanding
                your unique product requirements and translating them into functional,
                cost-effective, and visually appealing packaging.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </section >



      {/* Vision Section */ }
      < section
  id = "vision"
  className = "relative min-h-screen px-4 pt-28 pb-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style = {{ backgroundImage: "url('/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_0c95050f.jpg')" }
}
      >
  {/* Dark Overlay with Gradient */ }
  < div className = "absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0" ></div >

    <div className="relative z-10 container mx-auto">
      {/* Vision Header */}
      <div className="text-center mb-16">
        <Typography
          variant="h1"
          color="white"
          className="mb-6 font-bold text-4xl md:text-5xl lg:text-6xl"
        >
          Our Vision
        </Typography>
        <Typography
          variant="lead"
          color="white"
          className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
        >
          To revolutionize product packaging through innovative design, sustainable practices,
          and cutting-edge manufacturing technologies that exceed client expectations.
        </Typography>
      </div>

      {/* Vision Points Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        {[
          {
            num: "01",
            text: "Innovation in Packaging Design",
            bg: "bg-indigo-500",
            icon: "💡",
            description: "Pioneering new designs that blend aesthetics with functionality"
          },
          {
            num: "02",
            text: "Sustainability & Environmental Responsibility",
            bg: "bg-green-500",
            icon: "🌱",
            description: "Eco-friendly solutions that reduce environmental impact"
          },
          {
            num: "03",
            text: "Quality Craftsmanship & Precision",
            bg: "bg-red-500",
            icon: "⭐",
            description: "Uncompromising quality in every product we create"
          },
          {
            num: "04",
            text: "Client Collaboration & Custom Solutions",
            bg: "bg-amber-500",
            icon: "🤝",
            description: "Tailored packaging solutions through close partnership"
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/15"
          >
            {/* Number Badge */}
            <div className="flex items-center justify-between mb-6">
              <div className={`${item.bg} text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                {item.num}
              </div>
              <span className="text-3xl">{item.icon}</span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
              {item.text}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
              {item.description}
            </p>

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-4/5 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <Link to="/contactUs">
          <button className="bg-white text-blue-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-200/50">
            Join Our Vision →
          </button></Link>

      </div>
    </div>

{/* Floating Elements */ }
        <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-ping"></div>
      </section >

  {/* services Section */ }

  < section id = "services" className = "relative bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28 px-4" >
    <div className="container mx-auto">
      {/* Header Section */}
      <div className="text-center mb-16">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-bold text-3xl lg:text-4xl">
          Our Packaging Services
        </Typography>
        <Typography variant="lead" className="text-blue-gray-700 text-lg lg:text-xl max-w-3xl mx-auto">
          Comprehensive packaging solutions tailored to your specific product requirements,
          from conceptual design to final production and delivery.
        </Typography>
      </div>

      {/* Services Grid with Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
        {[
          {
            title: "Custom Packaging",
            description: "Tailored solutions designed specifically for your products",
            image: "/KH-Shams-Entp/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
            icon: "🎨",
            color: "bg-blue-500"
          },
          {
            title: "Sustainable Solutions",
            description: "Eco-friendly packaging options for environmentally conscious brands",
            image: "/KH-Shams-Entp/img/box-6063328_1280.png",
            icon: "🌱",
            color: "bg-green-500"
          },
          {
            title: "Bulk Manufacturing",
            description: "Large-scale production with consistent quality and timely delivery",
            image: "/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_54c26116.jpg",
            icon: "🏭",
            color: "bg-orange-500"
          },
          {
            title: "Logistics Support",
            description: "End-to-end supply chain management and distribution solutions",
            image: "/KH-Shams-Entp/img/pexels-tima-miroshnichenko-6169056.jpg",
            icon: "🚚",
            color: "bg-purple-500"
          }
        ].map((service, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}>
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Typography variant="h5" color="blue-gray" className="mb-3 font-semibold group-hover:text-blue-600 transition-colors">
                  {service.title}
                </Typography>
                <Typography className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </Typography>


              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section - Enhanced */}
      <div className="mb-20 py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Optional decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200 rounded-full translate-x-1/3 translate-y-1/3 opacity-20"></div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <Typography variant="h3" color="blue-gray" className="mb-4 font-bold text-gray-800">
              Our Process
            </Typography>
            <Typography className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              From concept to delivery, we ensure every step meets the highest standards of quality and efficiency
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "Understanding your needs and requirements",
                icon: "💬",
                image: "/KH-Shams-Entp/img/consultation-process.jpg",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                step: "02",
                title: "Design",
                description: "Creating custom packaging concepts",
                icon: "✏️",
                image: "/KH-Shams-Entp/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                step: "03",
                title: "Prototyping",
                description: "Developing and testing samples",
                icon: "🔬",
                image: "/KH-Shams-Entp/img/prototyping-process.jpg",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                step: "04",
                title: "Production",
                description: "Manufacturing with quality control",
                icon: "🏭",
                image: "/KH-Shams-Entp/img/production-process.jpg",
                gradient: "from-orange-500 to-red-500"
              },
              {
                step: "05",
                title: "Delivery",
                description: "Timely shipping and support",
                icon: "📦",
                image: "/KH-Shams-Entp/img/delivery-process.jpg",
                gradient: "from-indigo-500 to-blue-600"
              }
            ].map((process, index) => (
              <div key={index} className="text-center group relative">
                {/* Connecting line (except for last item) */}
                {index < 4 && (
                  <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 -z-10"></div>
                )}

                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${process.gradient} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl relative z-10`}>
                    {process.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-700">{process.step}</span>
                  </div>
                </div>

                <Typography variant="h6" color="blue-gray" className="mb-3 font-semibold text-gray-800 group-hover:text-gray-900 transition-colors">
                  {process.title}
                </Typography>
                <Typography className="text-gray-600 text-sm leading-relaxed px-2">
                  {process.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-16 text-white text-center mb-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full translate-x-1/3 translate-y-1/3 opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>

        {/* Animated background dots */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { number: "500+", label: "Projects Completed", icon: "🎯", delay: "0" },
              { number: "98%", label: "Client Satisfaction", icon: "⭐", delay: "200" },
              { number: "24/7", label: "Support Available", icon: "🛡️", delay: "400" },
              { number: "15+", label: "Years Experience", icon: "🏆", delay: "600" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className={`animate-fade-in-up delay-${stat.delay}`}>
                  {/* Icon container */}
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-sm group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    {stat.icon}
                  </div>

                  <Typography variant="h3" className="font-bold mb-3 text-4xl lg:text-5xl drop-shadow-lg">
                    {stat.number}
                  </Typography>
                  <Typography className="text-blue-100 text-base lg:text-lg font-medium leading-relaxed group-hover:text-white transition-colors">
                    {stat.label}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Optional CTA button */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <Typography variant="h6" className="mb-4 text-blue-100 font-light">
              Trusted by 500+ satisfied clients worldwide
            </Typography>
            <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <Typography variant="h3" color="blue-gray" className="mb-4 font-bold">
          Ready to Transform Your Packaging?
        </Typography>
        <Typography className="text-blue-gray-600 mb-8 max-w-2xl mx-auto">
          Get in touch with our team to discuss your packaging needs and receive a custom quote
        </Typography>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            email us
          </Button>

        </div>
      </div>
    </div>
      </section >

  {/* Contact Form */ }
{/* Contact Form */ }
      <div id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <div className="logo">
              <i className="fas fa-box-open"></i>
              KH Shams Entp
            </div>
            <p className="info-text">
              We specialize in creating custom packaging solutions that elevate your brand and protect your products. Let's discuss how we can help your business stand out.
            </p>
            <div className="contact-details">
              <div>
                <i className="fas fa-phone"></i>
                <span>+1 (555) 123-4567</span>
              </div>
              <div>
                <i className="fas fa-envelope"></i>
                <span>info@khshamsentp.com</span>
              </div>
              <div>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Design Street, Creative City</span>
              </div>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div className="contact-form">
            <div className="decoration decoration-1"></div>
            <div className="decoration decoration-2"></div>

            <h2 className="form-title">Get Custom Packaging Solutions</h2>
            <p className="form-subtitle">Complete this form and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                />
              </div>

              <div className="input-group">
                <label htmlFor="needs">Packaging Needs</label>
                <select
                  id="needs"
                  name="needs"
                  value={formData.needs}
                  onChange={handleChange}
                >
                  <option value="">Select your packaging needs</option>
                  <option value="food">Food & Beverage</option>
                  <option value="cosmetics">Cosmetics & Beauty</option>
                  <option value="electronics">Electronics</option>
                  <option value="retail">Retail Products</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your packaging requirements"
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
              </div>
              sa
              <button type="submit" className="btn" style={{ background: "linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)" }}>
                Send Message <i className="fa fa-paper-plane"></i>
              </button>
            </form>

            <div className="animated-border"></div>
          </div>
        </div>
      </div>

      <div id="contact" className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;


