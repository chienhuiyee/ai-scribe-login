import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, Library, Settings, Play, Download, Clock, CheckCircle, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  
  const [podcasts] = useState([
    {
      id: 1,
      title: "AI and the Future of Work",
      duration: "12:45",
      status: "completed",
      createdAt: "2 days ago",
      description: "Exploring how artificial intelligence is reshaping the workplace"
    },
    {
      id: 2,
      title: "Climate Change Solutions",
      duration: "8:23",
      status: "processing", 
      createdAt: "1 day ago",
      description: "Innovative approaches to tackling climate challenges"
    },
    {
      id: 3,
      title: "Digital Marketing Trends 2025",
      duration: "15:12",
      status: "completed",
      createdAt: "5 hours ago",
      description: "Latest trends and strategies in digital marketing"
    }
  ]);

  const getStatusIcon = (status: string) => {
    return status === "completed" ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <Circle className="h-4 w-4 text-yellow-500" />
    );
  };

  const getStatusText = (status: string) => {
    return status === "completed" ? "Completed" : "Processing";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, chien.hui.yee@gmail.com!</h1>
          <p className="text-muted-foreground">Create amazing AI-generated podcasts from your documents</p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card hover:glow-effect transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="bg-primary/10 p-4 rounded-xl mx-auto mb-4 w-fit group-hover:bg-primary/20 transition-colors">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Create New Podcast</CardTitle>
              <CardDescription>
                Upload a document and generate an AI podcast conversation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start Here</Button>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-all duration-300 cursor-pointer group">
            <CardHeader className="text-center">
              <div className="bg-accent/10 p-4 rounded-xl mx-auto mb-4 w-fit group-hover:bg-accent/20 transition-colors">
                <Library className="h-8 w-8 text-accent-foreground" />
              </div>
              <CardTitle>My Library</CardTitle>
              <CardDescription>
                View and manage your created podcasts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">Coming Soon</Button>
            </CardContent>
          </Card>

          <Card className="glass-card hover:glow-effect transition-all duration-300 cursor-pointer group" onClick={() => navigate("/profile")}>
            <CardHeader className="text-center">
              <div className="bg-secondary/10 p-4 rounded-xl mx-auto mb-4 w-fit group-hover:bg-secondary/20 transition-colors">
                <Settings className="h-8 w-8 text-secondary-foreground" />
              </div>
              <CardTitle>Settings</CardTitle>
              <CardDescription>
                Configure your account and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Coming Soon</Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Recent Activity</h2>
          
          {podcasts.length > 0 ? (
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <Card key={podcast.id} className="glass-card hover:glow-effect transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{podcast.title}</h3>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            {getStatusIcon(podcast.status)}
                            {getStatusText(podcast.status)}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">{podcast.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {podcast.duration}
                          </div>
                          <span>Created {podcast.createdAt}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {podcast.status === "completed" && (
                          <>
                            <Button size="sm" variant="ghost">
                              <Play className="h-4 w-4 mr-1" />
                              Play
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="glass-card text-center py-12">
              <CardContent>
                <div className="bg-muted/10 p-4 rounded-xl mx-auto mb-4 w-fit">
                  <Mic className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">No podcasts yet</h3>
                <p className="text-muted-foreground mb-6">
                  Create your first AI-generated podcast by uploading a document
                </p>
                <Button>Get Started</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}