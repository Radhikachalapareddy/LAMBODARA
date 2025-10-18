import { Leaf, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">EcoDevotion</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Creating divine connections while protecting Mother Earth. 
              Handcrafted eco-friendly devotional idols made with love and care.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 fill-current" />
              <span>& Clay for Mother Earth</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Mission Statement */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Promise</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>✓ 100% Natural Materials</li>
              <li>✓ Eco-Friendly & Biodegradable</li>
              <li>✓ Handcrafted by Artisans</li>
              <li>✓ Safe Water Immersion</li>
              <li>✓ Supporting Local Communities</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80">
            © {currentYear} EcoDevotion. All rights reserved. | Sustainable Devotion for a Better Tomorrow
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
