import React, { useRef, useEffect } from 'react';
import { Star, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const VideoDialog = ({ videoId }: { videoId: string }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1 hover:bg-primary hover:text-white hover:border-primary">
          <Play className="mr-1 h-4 w-4" />
          Intro Video
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Team Member Introduction</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const TeamSection: React.FC = () => {
  const teamScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (teamScrollRef.current) {
        if (teamScrollRef.current.scrollLeft + teamScrollRef.current.clientWidth >= teamScrollRef.current.scrollWidth) {
          teamScrollRef.current.scrollLeft = 0;
        } else {
          teamScrollRef.current.scrollLeft += 2;
        }
      }
    }, 50);

    return () => clearInterval(scrollInterval);
  }, []);

  const teamMembers = [
    {
      name: "Rhea D.",
      role: "Amazon Product Research",
      image: "/lovable-uploads/rhea-profile.png",
      description: "Five years experience optimizing Amazon product listings for maximum visibility and conversion rates.",
      previousCompany: "Amazon Marketplace",
      videoId: "KVx1gjyT3oU" // Rhea's intro video
    },
    {
      name: "Lisa M.",
      role: "Bookkeeping Manager",
      image: "/lovable-uploads/lisa-profile.jpg",
      description: "Eight years in marketplace analytics, skilled in data analysis and performance optimization.",
      previousCompany: "Walmart Marketplace",
      videoId: "7cNfs85pmss" // Lisa's intro video
    },
    {
      name: "Clydeh L.",
      role: "Amazon Account Manager",
      image: "/lovable-uploads/clydeh-profile.jpg",
      description: "Seven years managing customer communications and improving satisfaction ratings.",
      previousCompany: "Amazon Marketplace",
      videoId: "7-u_s_2184I" // Sarah's intro video
    }
  ];

  const positions = [
    "BOOKING KEEPING",
    "HIRING MANAGER",
    "MARKETPLACE ANALYTICS",
    "LISTING SPECIALIST",
    "INVENTORY MANAGER",
    "OPERATIONS",
    "CUSTOMER SERVICE",
    "CONTENT WRITER",
    "SOCIAL MEDIA MANAGER"
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Meet Your Future Team Members
        </h2>
        
        <div className="relative">
          <div 
            ref={teamScrollRef} 
            className="flex gap-8 overflow-x-auto pb-8 scrollbar-none snap-x snap-mandatory scroll-smooth justify-center"
            style={{ 
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-shrink-0 w-full sm:w-[400px] snap-center">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full relative">
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    from $16/hr
                  </div>
                  <div className="p-6 text-center">
                    <div className="relative mx-auto w-32 h-32 mb-4">
                      <Avatar className="w-32 h-32 rounded-full overflow-hidden">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </Avatar>
                    </div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-4 text-gray-600">{member.description}</p>
                    
                    <div className="mt-6 flex justify-center gap-2">
                      <VideoDialog videoId={member.videoId} />
                      <Button className="flex-1">
                        Start Trial
                      </Button>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t flex items-center justify-center">
                      <span className="text-gray-500 mr-2">Experience in:</span>
                      <span className="font-semibold">{member.previousCompany}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 overflow-hidden relative">
          <div className="w-full overflow-hidden">
            <div className="flex gap-6 whitespace-nowrap animate-scroll-left">
              {positions.map((position, index) => (
                <div key={index} className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {position}
                </div>
              ))}
              {positions.map((position, index) => (
                <div key={`dup-${index}`} className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {position}
                </div>
              ))}
            </div>
            <div className="flex gap-6 whitespace-nowrap animate-scroll-right mt-6">
              {positions.map((position, index) => (
                <div key={index} className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {position}
                </div>
              ))}
              {positions.map((position, index) => (
                <div key={`dup-${index}`} className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium inline-block">
                  {position}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 mb-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 hover:bg-gray-50 rounded-lg">
                  <h3 className="text-lg text-gray-500 font-medium mb-2">MINIMIZE COST</h3>
                  <p className="text-6xl font-bold mb-4">63%</p>
                  <div className="inline-block px-4 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                    AVERAGE SAVINGS
                  </div>
                </div>

                <div className="flex-1 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 hover:bg-gray-50 rounded-lg">
                  <h3 className="text-lg text-gray-500 font-medium mb-2">SAVE TIME</h3>
                  <p className="text-6xl font-bold mb-4">40h</p>
                  <div className="inline-block px-4 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                    WEEKLY BASIS
                  </div>
                </div>

                <div className="flex-1 p-8 text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:z-10 hover:bg-gray-50 rounded-lg">
                  <h3 className="text-lg text-gray-500 font-medium mb-2">TALENT RETENTION</h3>
                  <p className="text-6xl font-bold mb-4">97%</p>
                  <div className="inline-block px-4 py-1 rounded-full text-sm bg-gray-100 text-gray-600">
                    YEAR-TO-DATE AVERAGE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;