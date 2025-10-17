import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Footer } from "@/widgets/layout";
import {
    Typography,
    Card,
    CardBody,
    Button,
} from "@material-tailwind/react";

export function ContactUs() {
    const contactInfo = [
        {
            icon: MapPinIcon,
            title: "Address",
            details: [
                "Head Office: 123 Packaging Street, Industrial Area, Karachi, Pakistan",
                "Plant: PLOT NO. 55, SECTOR 27, INDUSTRIAL AREA, KORANGI, Karachi 74900"
            ],
            color: "from-purple-500 to-pink-500",
            action: () => {
                window.open('https://maps.google.com/?q=PLOT+NO.+55+SECTOR+27+INDUSTRIAL+AREA+KORANGI+Karachi+74900', '_blank');
            },
            actionText: "Get Directions"
        },
        {
            icon: PhoneIcon,
            title: "Phone",
            details: [
                "021-35060170",
                "0330-8453460"
            ],
            color: "from-blue-500 to-cyan-500",
            action: () => {
                window.location.href = 'tel:+922135060170';
            },
            actionText: "Call Now"
        },
        {
            icon: EnvelopeIcon,
            title: "Email",
            details: [
                "info@khshamsentp.com"
            ],
            color: "from-green-500 to-emerald-500",
            action: () => {
                window.location.href = 'mailto:info@khshamsentp.com';
            },
            actionText: "Send Email"
        },
        {
            icon: ClockIcon,
            title: "Working Hours",
            details: [
                "Monday - Saturday: 9:00 AM - 6:00 PM",
                "Sunday: Closed"
            ],
            color: "from-orange-500 to-red-500"
        }
    ];

    const handleQuickAction = (type) => {
        switch (type) {
            case 'call':
                window.location.href = 'tel:+922135060170';
                break;
            case 'email':
                window.location.href = 'mailto:info@khshamsentp.com';
                break;
            case 'whatsapp':
                window.open('https://wa.me/923308453460', '_blank');
                break;
            case 'directions':
                window.open('https://maps.google.com/?q=PLOT+NO.+55+SECTOR+27+INDUSTRIAL+AREA+KORANGI+Karachi+74900', '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <>
            {/* Enhanced Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20 px-4 min-h-[40vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="container mx-auto text-center relative z-10">
                    <div className="max-w-3xl mx-auto">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 font-bold text-3xl md:text-4xl lg:text-5xl"
                        >
                            Get In Touch
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="opacity-90 text-base md:text-lg lg:text-xl"
                        >
                            Ready to transform your packaging? Reach out to us through any of the channels below.
                        </Typography>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12 lg:py-16">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
                    {/* Contact Information - Enhanced */}
                    <div className="space-y-8">
                        <div className="text-center lg:text-left">
                            <Typography
                                variant="h2"
                                className="mb-4 font-bold bg-gradient-to-r from-blue-800 to-cyan-600 bg-clip-text text-transparent"
                            >
                                Contact Information
                            </Typography>
                            <Typography className="text-gray-600">
                                Multiple ways to reach us. Choose what works best for you.
                            </Typography>
                        </div>

                        <div className="space-y-4">
                            {contactInfo.map((item, index) => (
                                <Card
                                    key={index}
                                    className="group hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
                                >
                                    <CardBody className="p-4 lg:p-6">
                                        <div className="flex items-start">
                                            <div className={`bg-gradient-to-br ${item.color} p-3 rounded-xl mr-4 transform group-hover:scale-105 transition-transform duration-300 shadow-lg`}>
                                                <item.icon className="h-5 w-5 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <Typography variant="h5" className="mb-2 font-semibold text-gray-800 text-base lg:text-lg">
                                                    {item.title}
                                                </Typography>
                                                <div className="space-y-1 mb-3">
                                                    {item.details.map((detail, idx) => (
                                                        <Typography
                                                            key={idx}
                                                            className="text-gray-600 leading-relaxed text-sm lg:text-base"
                                                        >
                                                            {detail}
                                                        </Typography>
                                                    ))}
                                                </div>
                                                {item.action && (
                                                    <Button
                                                        size="sm"
                                                        className={`bg-gradient-to-r ${item.color} text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xs lg:text-sm`}
                                                        onClick={item.action}
                                                    >
                                                        {item.actionText}
                                                    </Button>
                                                )}
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>

                        {/* Quick Action Cards */}

                    </div>

                    {/* Map Section - Adjusted Height */}
                    <div className="space-y-6">
                        {/* Interactive Map with Fixed Height */}
                        <Card className="shadow-xl border-0 overflow-hidden">
                            <CardBody className="p-0">
                                <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                                    <Typography variant="h5" className="font-semibold flex items-center text-base lg:text-lg">
                                        <MapPinIcon className="w-4 h-4 mr-2" />
                                        Visit Our Location
                                    </Typography>
                                </div>
                                <div className="h-64 lg:h-80"> {/* Reduced height */}
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14480.891011371356!2d67.1510314941406!3d24.8432559967041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1695307958496!5m2!1sen!2s"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="KH Shams Enterprise Location"
                                    ></iframe>
                                </div>
                                <div className="p-3 bg-gray-50 text-center">
                                    <Button
                                        size="sm"
                                        className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-xs lg:text-sm"
                                        onClick={() => handleQuickAction('directions')}
                                    >
                                        <MapPinIcon className="w-3 h-3 mr-1 lg:mr-2" />
                                        Get Directions on Google Maps
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>

                        {/* Quick Response Card with Adjusted Height */}
                        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 shadow-lg">
                            <CardBody className="text-center p-4 lg:p-6">
                                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <ClockIcon className="w-6 h-6 text-white" />
                                </div>
                                <Typography variant="h5" className="mb-2 font-semibold text-gray-800 text-base lg:text-lg">
                                    Quick Response
                                </Typography>
                                <Typography className="text-gray-600 mb-3 text-sm lg:text-base">
                                    We respond to inquiries within 2 business hours.
                                </Typography>
                                <div className="flex items-center justify-center text-xs text-gray-500">
                                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                    Currently available
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
}

export default ContactUs;