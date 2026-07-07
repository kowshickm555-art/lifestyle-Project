import { useState } from "react";
import {
  MapPin,
  Search,
  Mic,
  LogIn,
  Menu,
  ChevronDown,
  Sparkles,
  Star,
  BadgeCheck,
  Phone,
  MessageCircle,
  Store,
  Wrench,
  PartyPopper,
  MapPinned,
  Briefcase,
  House,
  Percent,
  ArrowRight,
  Shield,
  Users,
} from "lucide-react";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    {
      name: "Shops",
      description: "Local stores & retailers",
      icon: Store,
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-600",
    },
    {
      name: "Services",
      description: "Home & professional services",
      icon: Wrench,
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-600",
    },
    {
      name: "Entertainment",
      description: "Events, clubs & activities",
      icon: PartyPopper,
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-600",
    },
    {
      name: "Tourism",
      description: "Explore local attractions",
      icon: MapPinned,
      bgColor: "bg-green-500/10",
      iconColor: "text-green-600",
    },
    {
      name: "Jobs",
      description: "Local job opportunities",
      icon: Briefcase,
      bgColor: "bg-indigo-500/10",
      iconColor: "text-indigo-600",
    },
    {
      name: "Rentals",
      description: "Property & item rentals",
      icon: House,
      bgColor: "bg-rose-500/10",
      iconColor: "text-rose-600",
    },
  ];

  const listings = [
    {
      id: 1,
      name: "Green Leaf Organic Store",
      image:
        "https://images.unsplash.com/photo-1488459716781-6818f2af8f69?w=400&h=300&fit=crop",
      category: "Shops",
      sponsored: true,
      rating: 4.8,
      reviews: 234,
      location: "Andheri West • 0.5 km",
      tags: ["Organic", "Fresh Produce"],
    },
    {
      id: 2,
      name: "Quick Fix Plumbing Services",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      category: "Services",
      rating: 4.9,
      reviews: 156,
      location: "Bandra • 1.2 km",
      tags: ["24/7", "Emergency"],
      price: "₹500/hr",
    },
    {
      id: 3,
      name: "The Cozy Cafe",
      image:
        "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=400&h=300&fit=crop",
      category: "Entertainment",
      rating: 4.7,
      reviews: 412,
      location: "Powai • 2.1 km",
      tags: ["WiFi", "Pet Friendly"],
      price: "₹₹",
    },
    {
      id: 4,
      name: "2BHK Furnished Apartment",
      image:
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
      category: "Rentals",
      rating: 4.6,
      reviews: 23,
      location: "Juhu • 3.5 km",
      tags: ["Furnished", "Sea View"],
      price: "₹45,000/mo",
    },
  ];

  const deals = [
    {
      id: 1,
      title: "50% Off First Haircut",
      business: "Style Studio Salon",
      image:
        "https://images.unsplash.com/photo-1633424842937-34d393ead07f?w=600&h=300&fit=crop",
      badge: "50% OFF",
      timeLeft: "2 days left",
    },
    {
      id: 2,
      title: "Free Delivery on Orders Above ₹500",
      business: "Fresh Mart Grocery",
      image:
        "https://images.unsplash.com/photo-1488459716781-6818f2af8f69?w=600&h=300&fit=crop",
      badge: "Free OFF",
      timeLeft: "This week",
    },
    {
      id: 3,
      title: "20% Off Weekend Brunch",
      business: "The Garden Restaurant",
      image:
        "https://images.unsplash.com/photo-1504674900306-873f63917663?w=600&h=300&fit=crop",
      badge: "20% OFF",
      timeLeft: "Weekends only",
    },
  ];

  const benefits = [
    {
      icon: BadgeCheck,
      title: "Verified Businesses",
      description: "All sellers go through our verification process",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "Your data and payments are always protected",
    },
    {
      icon: Star,
      title: "Genuine Reviews",
      description: "Real reviews from verified customers",
    },
    {
      icon: Users,
      title: "50,000+ Users",
      description: "Trusted by thousands in your city",
    },
  ];

  const suggestedSearches = [
    "Find a plumber near me",
    "Best restaurants for dinner",
    "Home cleaning services",
    "Gym membership deals",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/95 backdrop-blur-lg">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Logo and brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                <span className="text-lg font-bold text-primary-foreground">L</span>
              </div>
              <span className="hidden text-xl font-bold sm:block">LocalMart</span>
            </div>

            {/* Middle: Consumer/Seller toggle (desktop) */}
            <div className="hidden items-center gap-1 rounded-full bg-secondary p-1 md:flex">
              <button className="mode-toggle-consumer rounded-full px-4 py-2 text-sm font-medium text-primary-foreground shadow-md transition-all duration-300">
                Consumer
              </button>
              <button className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground">
                Seller
              </button>
            </div>

            {/* Right: Location, Login, Menu */}
            <div className="flex items-center gap-2">
              <button className="hidden items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground sm:flex">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Andheri West</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>

              <button className="hidden items-center gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground sm:flex">
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              {/* Hero Pill */}
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <Sparkles className="h-4 w-4" />
                AI-Powered Local Search
              </div>

              {/* Headline */}
              <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Discover the Best
                <span className="gradient-text block">Near You</span>
              </h1>

              {/* Description */}
              <p className="mb-8 max-w-xl mx-auto text-lg text-muted-foreground">
                Find local shops, services, entertainment, jobs, and more with
                AI-powered search
              </p>

              {/* Search Form */}
              <form className="relative mx-auto max-w-2xl">
                <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Try 'Find a salon for haircut tomorrow'..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input-hero pl-14 pr-24"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground"
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                  <button
                    type="submit"
                    className="btn-primary-glow rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Suggested Searches */}
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {suggestedSearches.map((search) => (
                  <button
                    key={search}
                    className="rounded-full border border-border/50 bg-card px-4 py-2 text-sm text-muted-foreground transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-foreground"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                Browse by Category
              </h2>
              <p className="text-muted-foreground">
                Find exactly what you need in your area
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.name} className="category-card group">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${category.bgColor}`}
                    >
                      <IconComponent className={`h-6 w-6 ${category.iconColor}`} />
                    </div>
                    <h3 className="mb-1 font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Featured Listings */}
        <section className="bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                  Featured Listings
                </h2>
                <p className="text-muted-foreground">
                  Hand-picked recommendations near you
                </p>
              </div>
              <button className="hidden items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground sm:inline-flex">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {listings.map((listing) => (
                <div key={listing.id} className="listing-card group">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Badges */}
                    {listing.sponsored && (
                      <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                        Sponsored
                      </div>
                    )}
                    <div className="absolute right-3 top-3 rounded-full border border-white/20 bg-card/90 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur-sm">
                      {listing.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <h3 className="line-clamp-1 font-semibold group-hover:text-primary">
                        {listing.name}
                      </h3>
                      <BadgeCheck className="h-4 w-4 flex-shrink-0 text-primary" />
                    </div>

                    <div className="mb-2 flex items-center gap-2">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{listing.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({listing.reviews} reviews)
                      </span>
                    </div>

                    <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {listing.location}
                    </div>

                    <div className="mb-3 flex flex-wrap gap-1">
                      {listing.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {listing.price && (
                      <div className="mb-3 text-sm font-medium text-foreground">
                        {listing.price}
                      </div>
                    )}

                    <div className="flex items-center justify-between border-t border-border/50 pt-3">
                      <span />
                      <div className="flex gap-2">
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground">
                          <Phone className="h-4 w-4" />
                        </button>
                        <button className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground">
                          <MessageCircle className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Deals & Offers */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                  <Percent className="h-5 w-5 text-destructive" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Local Deals & Offers
                  </h2>
                  <p className="text-muted-foreground">
                    Limited-time offers from local businesses
                  </p>
                </div>
              </div>
              <button className="hidden items-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground sm:inline-flex">
                View All Deals
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {deals.map((deal) => (
                <div
                  key={deal.id}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/50 bg-card hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative aspect-[2/1] overflow-hidden">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="premium-badge absolute right-4 top-4">
                      {deal.badge}
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="mb-2 text-sm text-muted-foreground">
                      {deal.business}
                    </p>
                    <h3 className="mb-4 font-semibold line-clamp-2">
                      {deal.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-muted-foreground">
                        {deal.timeLeft}
                      </span>
                      <button className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all duration-300">
                        Claim Deal
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground sm:hidden h-10">
              View All Deals
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        {/* Why Choose LocalMart */}
        <section className="bg-gradient-to-br from-primary/5 via-transparent to-accent/5 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                Why Choose LocalMart
              </h2>
              <p className="text-muted-foreground">Your trusted local marketplace</p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {benefits.map((benefit) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={benefit.title} className="text-center">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mx-auto">
                      <IconComponent className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="mb-1 font-semibold">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
