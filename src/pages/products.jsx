import React, { useState } from "react";
import {
    Typography,
    Card,
    CardBody,
    CardHeader,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpen = (product) => {
        setSelectedProduct(product);
        setOpenDialog(true);
    };

    const productCategories = [
        {
            title: "Custom Box Packaging",
            description: "Tailored packaging solutions designed specifically for your products",
            products: [
                {
                    image: "/img/1 (1).png",
                    name: "Folding Cartons",
                    description: "High-quality paperboard boxes perfect for retail products",
                    features: ["Custom printing", "Various sizes", "Eco-friendly materials", "Reinforced corners"]
                },
                {
                    image: "/img/1 (2).png",
                    name: "Rigid Boxes",
                    description: "Premium packaging for luxury items and high-end products",
                    features: ["Premium materials", "Magnetic closures", "Velvet lining", "Custom inserts"]
                },
                {
                    image: "/img/1 (3).png",
                    name: "Corrugated Boxes",
                    description: "Durable shipping and storage solutions for all industries",
                    features: ["Multiple wall options", "Custom printing", "Die-cut designs", "Weather resistant"]
                }
            ]
        },
        {
            title: "Sustainable Packaging",
            description: "Environmentally friendly packaging options for eco-conscious brands",
            products: [
                {
                    image: "/img/1 (4).png",
                    name: "Recycled Paper Packaging",
                    description: "Packaging made from 100% recycled materials",
                    features: ["FSC certified", "Biodegradable", "Custom branding", "Cost-effective"]
                },
                {
                    image: "/img/1 (5).png",
                    name: "Biodegradable Plastics",
                    description: "Plant-based plastics that break down naturally",
                    features: ["Compostable", "Food-safe", "Durable", "Custom shapes"]
                },
                {
                    image: "/img/3.png",
                    name: "Mushroom Packaging",
                    description: "Innovative packaging grown from mycelium and agricultural waste",
                    features: ["100% biodegradable", "Lightweight", "Shock absorbent", "Custom molded"]
                }
            ]
        },
        {
            title: "Flexible Packaging",
            description: "Versatile packaging solutions for food, retail, and industrial applications",
            products: [
                {
                    image: "/img/4.png",
                    name: "Stand-up Pouches",
                    description: "Convenient and eye-catching packaging for various products",
                    features: ["Resealable options", "Custom shapes", "High-quality printing", "Barrier protection"]
                },
                {
                    image: "/img/1 (6).png",
                    name: "Vacuum Bags",
                    description: "Air-tight packaging for food preservation and industrial use",
                    features: ["Multi-layer protection", "Durable seals", "Custom sizes", "High barrier films"]
                },
                {
                    image: "/img/1 (7).png",
                    name: "Shrink Sleeves",
                    description: "360° packaging that conforms to any container shape",
                    features: ["Full-body printing", "Tamper evidence", "UV protection", "Various materials"]
                }
            ]
        },
        {
            title: "Protective Packaging",
            description: "Solutions designed to protect your products during shipping and handling",
            products: [
                {
                    image: "/img/1 (12).png",
                    name: "Bubble Wrap",
                    description: "Classic protective material with excellent cushioning properties",
                    features: ["Various bubble sizes", "Anti-static options", "Perforated rolls", "Custom widths"]
                },
                {
                    image: "/img/7.png",
                    name: "Foam Inserts",
                    description: "Custom-cut foam for perfect product protection",
                    features: ["Precision cutting", "Multiple density options", "Custom shapes", "Lightweight"]
                },
                {
                    image: "/img/1 (13).png",
                    name: "Air Pillows",
                    description: "Inflatable packaging that provides cushioning and void fill",
                    features: ["Space efficient", "Cost effective", "Easy to use", "Recyclable"]
                }
            ]
        },
        {
            title: "Specialty Packaging",
            description: "Unique packaging solutions for specific industries and applications",
            products: [
                {
                    image: "/img/3.png",
                    name: "Food-Grade Packaging",
                    description: "Safe packaging solutions for food and beverage products",
                    features: ["FDA approved", "Temperature resistant", "Grease resistant", "Airtight seals"]
                },
                {
                    image: "/img/4.png",
                    name: "Pharmaceutical Packaging",
                    description: "Compliant packaging for medical and pharmaceutical products",
                    features: ["Child-resistant", "Tamper-evident", "Sterile barriers", "Compliance guaranteed"]
                },
                {
                    image: "/img/5.png",
                    name: "Electrostatic Packaging",
                    description: "Specialized packaging for electronic components",
                    features: ["ESD protection", "Static shielding", "Moisture barrier", "Durable construction"]
                }
            ]
        }
    ];

    return (
        <>
            {/* Header Section */}
            <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-700 py-20 px-4 min-h-[40vh] flex items-center">
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="container mx-auto text-center relative z-10">
                    <Typography variant="h1" color="white" className="mb-6 text-4xl md:text-5xl font-bold">
                        Our Products
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-90 max-w-3xl mx-auto text-lg md:text-xl">
                        Discover our comprehensive range of packaging solutions designed to meet
                        every need from basic shipping to premium retail presentation
                    </Typography>
                </div>
            </section>

            {/* Products Content Section */}
            <section className="relative bg-gray-50 py-16 px-4">
                <div className="container mx-auto">
                    {productCategories.map((category, index) => (
                        <div key={index} className="mb-16">
                            <div className="text-center mb-12">

                                <Typography variant="h2" color="blue-gray" className="mb-4 text-3xl md:text-4xl font-bold">
                                    {category.title}
                                </Typography>
                                <Typography variant="paragraph" className="text-blue-gray-700 text-lg max-w-2xl mx-auto">
                                    {category.description}
                                </Typography>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {category.products.map((product, productIndex) => (
                                    <Card
                                        key={productIndex}
                                        className="shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                                        onClick={() => handleOpen(product)}
                                    >
                                        <CardHeader
                                            floated={false}
                                            shadow={false}
                                            color="transparent"
                                            className="m-0 rounded-none relative aspect-square overflow-hidden flex items-center justify-center bg-white"
                                        >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-4/5 h-4/5 object-contain group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </CardHeader>

                                        <CardBody className="text-center p-6">
                                            <Typography variant="h5" color="blue-gray" className="mb-3 font-bold text-xl">
                                                {product.name}
                                            </Typography>
                                            <Typography className="text-blue-gray-600 mb-4 line-clamp-2">
                                                {product.description}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Dialog */}
            <Dialog
                open={openDialog}
                handler={() => setOpenDialog(false)}
                size="lg"
                className="rounded-lg"
            >
                <DialogHeader className="flex justify-between items-center border-b border-gray-200 py-4 px-6">
                    <Typography variant="h4" color="blue-gray">
                        {selectedProduct?.name}
                    </Typography>
                    <IconButton
                        color="blue-gray"
                        size="sm"
                        variant="text"
                        onClick={() => setOpenDialog(false)}
                    >
                        <XMarkIcon className="h-5 w-5" />
                    </IconButton>
                </DialogHeader>
                <DialogBody divider className="p-6">
                    {/* <div className="mb-6 h-64 aspect-square flex items-center justify-center bg-gray-100 rounded-lg">
                        <img
                            src={selectedProduct?.image}
                            alt={selectedProduct?.name}
                            className="max-h-full max-w-full object-contain p-4"
                        />
                    </div> */}
                    <div className="mb-6 h-64 aspect-square flex items-center justify-center bg-gray-100 rounded-lg">
                        <img
                            src={selectedProduct?.image}
                            alt={selectedProduct?.name}
                            className="max-h-full max-w-full object-contain p-4"
                        // className="w-4/5 h-4/5 object-contain"
                        />
                    </div>
                    <Typography variant="paragraph" className="mb-6 text-lg text-gray-700">
                        {selectedProduct?.description}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-4 font-semibold text-lg">
                        Key Features:
                    </Typography>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedProduct?.features?.map((feature, index) => (
                            <div key={index} className="flex items-start">
                                <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                                    <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                                </div>
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </DialogBody>
                <DialogFooter className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 justify-end px-6 py-4">
                    <Button
                        variant="outlined"
                        color="blue-gray"
                        onClick={() => setOpenDialog(false)}
                        className="w-full sm:w-auto order-2 sm:order-1"
                    >
                        Close
                    </Button>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto order-1 sm:order-2"
                        onClick={() => {
                            setOpenDialog(false);
                            // Here you would typically redirect to contact page or open a quote form
                        }}
                    >
                        Request Quote
                    </Button>
                </DialogFooter>
            </Dialog>

            {/* Call to Action Section */}
            <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 py-20 px-4">
                <div className="container mx-auto text-center max-w-4xl">
                    <Typography variant="h3" color="white" className="mb-6 text-3xl md:text-4xl font-bold">
                        Can't Find What You're Looking For?
                    </Typography>
                    <Typography variant="lead" color="white" className="opacity-90 mb-10 text-lg md:text-xl">
                        We specialize in custom packaging solutions. Contact us to discuss your specific requirements.
                    </Typography>
                    <Link to="/contactUs">
                        <Button
                            size="lg"
                            className="bg-white text-blue-800 hover:bg-gray-100 px-8 py-3 text-base font-bold rounded-full"
                        >
                            Contact Our Team
                        </Button></Link>

                </div>
            </section>

            <Footer />
        </>
    );
}

export default Products;