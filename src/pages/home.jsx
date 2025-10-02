import React, { useMemo, useCallback, useEffect, useState, memo } from "react";
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
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BuildingStorefrontIcon,
  ShieldCheckIcon
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// Memoized constants
const IMAGES = Object.freeze([
  {
    url: "/img/pexels-tiger-lily-4481260.jpg",
    // url: "/KH-Shams-Entp/img/pexels-tiger-lily-4481260.jpg",
    title: "CUSTOM PACKAGING SOLUTIONS",
    subtitle: "Tailored to your specific product requirements"
  },
  {
    url: "/img/WhatsApp Image 2025-09-21 at 15.55.47_f325106e.jpg",
    // url: "/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_f325106e.jpg",
    title: "SUSTAINABLE MATERIALS",
    subtitle: "Eco-friendly options for environmentally conscious brands"
  },
  {
    url: "/img/package-1511683_1280.jpg",
    // url: "/KH-Shams-Entp/img/package-1511683_1280.jpg",
    title: "QUALITY MANUFACTURING",
    subtitle: "Precision production with rigorous quality control"
  },
  {
    url: "/img/empty-boxes-on-table.jpg",
    // url: "/KH-Shams-Entp/img/empty-boxes-on-table.jpg",
    title: "QUALITY MANUFACTURING",
    subtitle: "Precision production with rigorous quality control"
  }
]);

const INITIAL_FORM_STATE = Object.freeze({
  name: '',
  email: '',
  company: '',
  needs: '',
  message: '',
  terms: false
});

// Memoized slider component
// Memoized slider component - RESPONSIVE VERSION
const ImageSlider = memo(({ images, current, onNext, onPrev, onShowSlide, onMouseLeave }) => {
  return (
    <div
      className="relative flex content-center items-center justify-center pt-16 pb-32 overflow-hidden"
      onMouseLeave={onMouseLeave}
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
            alt={`Slide ${index + 1} - ${image.title}`}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            // Responsive sizing
            style={{
              minHeight: '400px', // Minimum height for very small screens
              maxHeight: '100vh', // Maximum height is viewport height
            }}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      {/* Text Content */}
      <div className="max-w-6xl container relative mx-auto px-4 z-10">
        <div className="flex items-center justify-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[50vh]">
          <div className="w-full px-4 text-center">
            <Typography
              variant="h1"
              color="white"
              className="mb-3 md:mb-6 font-black 
                text-2xl xs:text-3xl  // Extra small phones
                sm:text-4xl           // Small phones
                md:text-5xl           // Tablets
                lg:text-6xl           // Laptops
                xl:text-7xl           // Desktops
                px-2 animate-fade-in-up leading-tight"
            >
              {images[current].title}
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="opacity-95 
                text-base xs:text-lg    // Extra small phones
                sm:text-xl              // Small phones
                md:text-2xl             // Tablets
                lg:text-3xl             // Laptops
                px-2 xs:px-4 font-light animate-fade-in-up delay-150 leading-relaxed"
            >
              {images[current].subtitle}
            </Typography>

            {/* CTA Buttons - Responsive sizing */}
            <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up delay-300">
              <Link to="/contactUs">
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white 
                    px-4 py-2 xs:px-6 xs:py-2.5   // Extra small to small
                    sm:px-8 sm:py-3               // Small and up
                    rounded-full text-sm xs:text-base sm:text-lg font-semibold 
                    transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Button>
              </Link>

              <Link to="/products">
                <Button
                  variant="outlined"
                  size="sm"
                  className="border-white text-white hover:bg-white/10 
                    px-4 py-2 xs:px-6 xs:py-2.5   // Extra small to small
                    sm:px-8 sm:py-3               // Small and up
                    rounded-full text-sm xs:text-base sm:text-lg font-semibold 
                    transition-all duration-300 hover:scale-105"
                >
                  View Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Responsive visibility */}
      <button
        onClick={onPrev}
        className="absolute left-2 xs:left-4 top-1/2 -translate-y-1/2 
          bg-black/30 text-white p-2 xs:p-3 rounded-full 
          hover:bg-black/60 z-20 transition-all duration-300 backdrop-blur-sm
          hidden sm:flex" // Hide on mobile, show on small and up
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 xs:right-4 top-1/2 -translate-y-1/2 
          bg-black/30 text-white p-2 xs:p-3 rounded-full 
          hover:bg-black/60 z-20 transition-all duration-300 backdrop-blur-sm
          hidden sm:flex" // Hide on mobile, show on small and up
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Mobile Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 
          bg-black/50 text-white p-2 rounded-full 
          hover:bg-black/70 z-20 transition-all duration-300
          flex sm:hidden" // Show on mobile, hide on small and up
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-4 h-4" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 
          bg-black/50 text-white p-2 rounded-full 
          hover:bg-black/70 z-20 transition-all duration-300
          flex sm:hidden" // Show on mobile, hide on small and up
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-4 h-4" />
      </button>

      {/* Dots Indicator - Responsive sizing */}
      <div className="absolute bottom-6 xs:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 xs:gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onShowSlide(index)}
            className={`rounded-full transition-all duration-300 ${index === current
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
              } 
            w-2 h-2 xs:w-3 xs:h-3`} // Responsive dot size
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-2 xs:bottom-4 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <ChevronDownIcon className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-white/80" />
      </div>
    </div>
  );
});

// Memoized features section
const FeaturesSection = memo(() => {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 px-4 py-20 lg:py-28">
      <div className="container mx-auto">
        <div className="text-center mb-16 relative">
          <Typography variant="h2" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
            Why Choose KH Shams Enterprise?
          </Typography>
          <Typography variant="lead" className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
            Delivering excellence in packaging solutions with innovation, quality, and reliability
          </Typography>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-24">
          {featuresData.map(({ color, title, icon, description }, index) => (
            <div
              key={title}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/80 hover:border-blue-300/50 h-full transform hover:-translate-y-3 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br from-${color}-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-2 right-2 w-8 h-8 bg-current opacity-5 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-6 h-6 bg-current opacity-5 rounded-full"></div>
                </div>

                <div className="relative mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${color}-500 to-${color}-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg relative overflow-hidden group-hover:shadow-xl`}>
                    {React.createElement(icon, {
                      className: "w-8 h-8 text-white relative z-10",
                    })}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </div>
                </div>

                <Typography
                  variant="h5"
                  className="mb-4 font-bold text-lg lg:text-xl text-gray-800 group-hover:text-gray-900 transition-colors duration-300 relative z-10"
                >
                  {title}
                </Typography>

                <Typography className="text-gray-600 text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300 relative z-10">
                  {description}
                </Typography>

                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-4/5 transition-all duration-500 rounded-full"></div>
              </div>

              <div className="absolute -z-10 top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-bounce"></div>
              <div className="absolute -z-10 bottom-4 left-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-150 group-hover:animate-pulse"></div>
              <div className="absolute -z-10 top-1/2 right-8 w-1.5 h-1.5 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"></div>
            </div>
          ))}
        </div>

        <AboutSection />
      </div>
    </section>
  );
});

// Memoized about section
const AboutSection = memo(() => {
  const aboutItems = useMemo(() => [
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
  ], []);

  return (
    <div id="about" className="flex flex-col lg:flex-row gap-12 items-center">
      <div className="w-full lg:w-6/12">
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg mb-6">
            <BuildingStorefrontIcon className="w-10 h-10 text-white" />
          </div>
          <Typography variant="h2" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
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
          {aboutItems.map((item, index) => (
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
              src="/img/WhatsApp Image 2025-09-21 at 14.25.18_2092db2f.jpg"
              // src="/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 14.25.18_2092db2f.jpg"
              className="w-full h-96 object-cover"
              loading="lazy"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
            <div className="text-center">
              <Typography variant="h3" className="text-blue-600 font-bold mb-1">
                35+
              </Typography>
              <Typography variant="small" className="text-gray-600">
                Years Experience
              </Typography>
            </div>
          </div>

          <div className="absolute -top-4 -left-4 bg-green-100 rounded-full p-3 shadow-lg">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl p-6 text-white" style={{
          background: "linear-gradient(135deg, #2a6b7f 0%, #38a3a5 100%)",
        }}>
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
  );
});

// Memoized vision section
const VisionSection = memo(() => {
  const visionPoints = useMemo(() => [
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
  ], []);

  return (
    <section
      id="vision"
      className="relative min-h-screen px-4 pt-28 pb-20 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ backgroundImage: "url('/img/WhatsApp Image 2025-09-21 at 15.55.47_0c95050f.jpg')" }}
    // style={{ backgroundImage: "url('/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_0c95050f.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 z-0"></div>

      <div className="relative z-10 container mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {visionPoints.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:bg-white/15"
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`${item.bg} text-white w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {item.num}
                </div>
                <span className="text-3xl">{item.icon}</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">
                {item.text}
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                {item.description}
              </p>

              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-4/5 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contactUs">
            <button className="bg-white text-blue-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-100 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-amber-200/50">
              Join Our Vision →
            </button>
          </Link>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-4 h-4 bg-white rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-20 w-6 h-6 bg-amber-400 rounded-full opacity-30 animate-bounce"></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-ping"></div>
    </section>
  );
});

// Memoized services section
const ServicesSection = memo(() => {
  const services = useMemo(() => [
    {
      title: "Custom Packaging",
      description: "Tailored solutions designed specifically for your products",
      // image: "/KH-Shams-Entp/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
      image: "/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
      icon: "🎨",
      color: "bg-blue-500"
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly packaging options for environmentally conscious brands",
      image: "/img/box-6063328_1280.png",
      // image: "/KH-Shams-Entp/img/box-6063328_1280.png",
      icon: "🌱",
      color: "bg-green-500"
    },
    {
      title: "Bulk Manufacturing",
      description: "Large-scale production with consistent quality and timely delivery",
      image: "/img/WhatsApp Image 2025-09-21 at 15.55.47_54c26116.jpg",
      // image: "/KH-Shams-Entp/img/WhatsApp Image 2025-09-21 at 15.55.47_54c26116.jpg",
      icon: "🏭",
      color: "bg-orange-500"
    },
    {
      title: "Logistics Support",
      description: "End-to-end supply chain management and distribution solutions",
      image: "/img/pexels-tima-miroshnichenko-6169056.jpg",
      // image: "/KH-Shams-Entp/img/pexels-tima-miroshnichenko-6169056.jpg",
      icon: "🚚",
      color: "bg-purple-500"
    }
  ], []);

  const processSteps = useMemo(() => [
    {
      step: "01",
      title: "Consultation",
      description: "Understanding your needs and requirements",
      icon: "💬",
      image: "/img/consultation-process.jpg",
      // image: "/KH-Shams-Entp/img/consultation-process.jpg",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Design",
      description: "Creating custom packaging concepts",
      icon: "✏️",
      image: "/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
      // image: "/KH-Shams-Entp/img/jukebox-print-FUohNQatzVs-unsplash.jpg",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Prototyping",
      description: "Developing and testing samples",
      icon: "🔬",
      image: "/img/prototyping-process.jpg",
      // image: "/KH-Shams-Entp/img/prototyping-process.jpg",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Production",
      description: "Manufacturing with quality control",
      icon: "🏭",
      image: "/img/production-process.jpg",
      // image: "/KH-Shams-Entp/img/production-process.jpg",
      gradient: "from-orange-500 to-red-500"
    },
    {
      step: "05",
      title: "Delivery",
      description: "Timely shipping and support",
      icon: "📦",
      image: "/img/delivery-process.jpg",
      // image: "/KH-Shams-Entp/img/delivery-process.jpg",
      gradient: "from-indigo-500 to-blue-600"
    }
  ], []);

  const stats = useMemo(() => [
    { number: "500+", label: "Projects Successfully Completed for Clients", icon: "🎯", delay: "0" },
    { number: "98%", label: "Client Satisfaction Rate Across Industries", icon: "⭐", delay: "200" },
    { number: "24/7", label: "Dedicated Customer Support Available Anytime", icon: "🛡️", delay: "400" },
    { number: "35+", label: "Years Experience in Printing and Packaging", icon: "🏆", delay: "600" }
  ], []);

  return (
    <section id="services" className="bg-gradient-to-br from-green-50 via-white to-blue-100 relative overflow-hidden py-20 lg:py-28 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography variant="h2" color="blue-gray" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
            Our Packaging Services
          </Typography>
          <Typography variant="lead" className="text-blue-gray-700 text-lg lg:text-xl max-w-3xl mx-auto">
            Comprehensive packaging solutions tailored to your specific product requirements,
            from conceptual design to final production and delivery.
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100 hover:border-blue-200">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg`}>
                    {service.icon}
                  </div>
                </div>

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

        <div className="mb-20 py-16 relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-16">
              <Typography variant="h3" color="blue-gray" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
                Our Process
              </Typography>
              <Typography className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                From concept to delivery, we ensure every step meets the highest standards of quality and efficiency
              </Typography>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto px-4">
              {processSteps.map((process, index) => (
                <div key={index} className="text-center group relative">
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 -z-10"></div>
                  )}

                  <div className="relative mb-6">
                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${process.gradient} rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl relative z-10`}>
                      {process.icon}
                    </div>
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

        <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl p-8 lg:p-16 text-white text-center mb-16 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full translate-x-1/3 translate-y-1/3 opacity-10"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>

          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-700"></div>
          </div>

          <div className="relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group">
                  <div className={`animate-fade-in-up delay-${stat.delay}`}>
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

            <div className="mt-12 pt-8 border-t border-white/20">
              <Typography variant="h6" className="mb-4 font-bold  bg-clip-text text-transparent">
                Trusted by 500+ satisfied clients worldwide
              </Typography>
              <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg">
                Start Your Project
              </button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Typography variant="h3" color="blue-gray" className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-orange-600 bg-clip-text text-transparent">
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
    </section>
  );
});

// Main optimized component
export function Home() {
  const [current, setCurrent] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // Memoized images reference
  const images = useMemo(() => IMAGES, []);

  // Optimized slide handlers
  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const showSlide = useCallback((index) => {
    setCurrent(index);
    setAutoSlide(false);
    const timer = setTimeout(() => setAutoSlide(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setAutoSlide(true);
  }, []);

  // Optimized auto-slide effect
  useEffect(() => {
    if (!autoSlide) return;

    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoSlide, images.length]);

  // Image preloading effect
  useEffect(() => {
    // Preload next image
    const nextIndex = (current + 1) % images.length;
    const img = new Image();
    img.src = images[nextIndex].url;
  }, [current, images]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    alert('Form submitted! We\'ll get back to you within 24 hours.');
    setFormData(INITIAL_FORM_STATE);
  }, []);

  return (
    <>
      <ImageSlider
        images={images}
        current={current}
        onNext={nextSlide}
        onPrev={prevSlide}
        onShowSlide={showSlide}
        onMouseLeave={handleMouseLeave}
      />
      <FeaturesSection />
      <VisionSection />
      <ServicesSection />
      <div id="contact" className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;