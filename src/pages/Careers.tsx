import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { trackFormSubmission } from "@/lib/analytics";

const jobOpenings = [
	{
		title: "Web Development Intern",
		customDetails: [
			"Role: Work with the lead developer on live projects, gaining hands-on experience across the full web stack—from React-based front ends to PHP back ends and SQL databases.",
			"Details: Hybrid | 3 Months | ₹10,000/month.",
			"Requirements: Strong basics in HTML5, CSS3, JavaScript (ES6+), and familiarity with React.js, PHP, and SQL.",
			"Application: Apply at careers@kaptick.com with the subject 'Web Development Intern Application' + resume + GitHub/portfolio link.",
		],
	},
	{
		title: "SEO Intern",
		customDetails: [
			"Role: Work closely with the marketing team to gain hands-on experience in search engine optimization, with a focus on AI-powered search.",
			"Details: Hybrid | 3 Months | ₹10,000/month.",
			"Requirements: Strong basics in SEO principles, familiarity with Google Analytics, and an understanding of how AI models like Gemini process information.",
			"Application: Apply at careers@kaptick.com with the subject 'SEO Intern Application' + resume.",
		],
	},
	{
		title: "Video Editor Intern (Social Media)",
		customDetails: [
			"Role: Produce high-quality, engaging video content for platforms like Instagram, Facebook, and Tik Tok.",
			"Details: Hybrid | 3 Months | ₹10,000/month.",
			"Requirements: Proficiency in Adobe Premiere Pro and a strong portfolio of sample work.",
			"Application: Apply at careers@kaptick.com with the subject 'Video Editor Intern Application' + resume + portfolio/sample work link.",
		],
	},
];

const Careers = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		position: "",
		resume: null,
		portfolio: "",
		message: "",
	});

	// Ref for the form section
	const formRef = useRef<HTMLFormElement | null>(null);

	// Scroll to form and preselect position
	const handleApplyNow = (position: string) => {
		setFormData((prev) => ({ ...prev, position }));
		setTimeout(() => {
			if (formRef.current) {
				formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}, 100);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			resume: e.target.files ? e.target.files[0] : null,
		});
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setFormData({
			...formData,
			position: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		
		// Convert resume file to base64
		let resumeBase64 = "";
		let resumeMimeType = "";
		let resumeFileName = "";
		if (formData.resume) {
			const file = formData.resume;
			resumeMimeType = file.type;
			resumeFileName = file.name;
			const reader = new FileReader();
			resumeBase64 = await new Promise((resolve, reject) => {
				reader.onload = () => {
					const result = reader.result as string;
					resolve(result.split(",")[1]); // Remove data:mimetype;base64,
				};
				reader.onerror = reject;
				reader.readAsDataURL(file);
			});
		}

		const payload = {
			name: formData.name,
			email: formData.email,
			position: formData.position,
			portfolio: formData.portfolio,
			message: formData.message,
			resumeBase64,
			resumeMimeType,
			resumeFileName,
		};

		try {
			// Updated to use kaptick.com domain
			const response = await fetch(
				"https://kaptick.com/backend/careers.php",
				{
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				}
			);
			const result = await response.json();
			
			if (result.success) {
				// Track successful career application
				trackFormSubmission('career', {
					position: formData.position,
					has_resume: !!formData.resume,
					has_portfolio: !!formData.portfolio
				});

				alert("Application submitted successfully!");
				setFormData({
					name: "",
					email: "",
					position: "",
					resume: null,
					portfolio: "",
					message: "",
				});
			} else {
				alert("Submission failed: " + (result.error || "Unknown error"));
			}
		} catch (err) {
			alert("Network error: " + err);
		}
	};

	return (
		<div className="min-h-screen bg-black text-white">
			<Navigation />
			<section className="container pt-24 pb-12 text-center">
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-4xl md:text-5xl font-bold mb-6"
				>
					Careers at Kaptick Ventures
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1, duration: 0.5 }}
					className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
				>
					We strive to produce the best results for our clients and we are an{" "}
					<span className="text-primary font-semibold">AI-first company</span>. We
					utilise AI to the fullest and offer remote/hybrid work, direct
					mentorship, and real growth opportunities. Join our agile team and build
					the future with us.
				</motion.p>
			</section>

			<section className="container py-8 md:py-16">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold mb-8 text-center"
				>
					Open Positions
				</motion.h2>
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{jobOpenings.map((job, idx) => (
									<motion.div
										key={idx}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: idx * 0.1 }}
										className="glass glass-hover p-8 rounded-2xl border border-white/10 flex flex-col h-full"
									>
										<h3 className="text-2xl font-bold mb-6 text-primary">
											{job.title}
										</h3>
										{job.customDetails ? (
											<div className="mt-2 mb-6 text-left flex-1 space-y-4">
												{job.customDetails.map((line, i) => {
													const isMainDetail = line.startsWith('Role:') || line.startsWith('Details:') || line.startsWith('Requirements:') || line.startsWith('Application:');
													const [label, ...content] = line.split(': ');
                        
													return (
														<div key={i} className="space-y-2">
															{isMainDetail ? (
																<div>
																	<h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-2">
																		{label}
																	</h4>
																	<p className="text-gray-300 leading-relaxed">
																		{content.join(': ')}
																	</p>
																</div>
															) : (
																<p className="text-gray-300 leading-relaxed">{line}</p>
															)}
														</div>
													);
												})}
											</div>
										) : null}
										<div className="mt-auto pt-6 border-t border-white/10">
											<Button
												size="lg"
												className="button-gradient text-lg px-8 py-4 h-auto w-full"
												type="button"
												onClick={() => handleApplyNow(job.title)}
											>
												Apply Now
											</Button>
										</div>
									</motion.div>
								))}
				</div>
			</section>

			<section className="container py-8 md:py-16">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-bold mb-8 text-center"
				>
					How to Apply
				</motion.h2>
				<div className="max-w-2xl mx-auto text-center mb-8">
					<p className="text-lg text-gray-300 mb-4">
						Send your resume, GitHub/portfolio, and a short message about why you’re
						a great fit to{" "}
						<a
							href="mailto:careers@kaptick.com"
							className="text-primary font-semibold"
						>
							careers@kaptick.com
						</a>
						.
					</p>
					<p className="text-lg text-gray-300 mb-4">
						Or apply directly using the form below. All fields are required.
					</p>
				</div>
						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="glass p-6 md:p-8 rounded-2xl max-w-2xl mx-auto space-y-6"
						>
					<Input
						type="text"
						name="name"
						placeholder="Your Full Name *"
						value={formData.name}
						onChange={handleInputChange}
						required
						className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
					/>
					<Input
						type="email"
						name="email"
						placeholder="Your Email Address *"
						value={formData.email}
						onChange={handleInputChange}
						required
						className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
					/>
					<select
						name="position"
						value={formData.position}
						onChange={handleSelectChange}
						required
						className="bg-black border border-primary text-white rounded-lg p-3 w-full focus:border-primary focus:ring-2 focus:ring-primary"
					>
						<option value="" disabled>Select Position *</option>
						{jobOpenings.filter(job => job.title && job.customDetails).map((job, idx) => (
							<option key={idx} value={job.title}>{job.title}</option>
						))}
					</select>
					<Input
						type="url"
						name="portfolio"
						placeholder="Portfolio or GitHub Link *"
						value={formData.portfolio}
						onChange={handleInputChange}
						required
						className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary"
					/>
					<Input
						type="file"
						name="resume"
						accept=".pdf,.doc,.docx"
						onChange={handleFileChange}
						required
						className="bg-white/10 border-white/20 text-white rounded-lg"
					/>
					<Textarea
						name="message"
						placeholder="Why are you a great fit for this role? *"
						value={formData.message}
						onChange={handleInputChange}
						rows={4}
						required
						className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-primary resize-none"
					/>
					<div className="text-center">
						<Button
							type="submit"
							size="lg"
							className="button-gradient text-lg px-8 py-4 h-auto w-full md:w-auto"
						>
							Apply Now
						</Button>
						<p className="text-sm text-gray-400 mt-4">
							All applications go to{" "}
							<a
								href="mailto:careers@kaptick.com"
								className="text-primary font-semibold"
							>
								careers@kaptick.com
							</a>
							. We respect your privacy.
						</p>
					</div>
				</form>
			</section>
			<Footer />
		</div>
	);
};

export default Careers;
