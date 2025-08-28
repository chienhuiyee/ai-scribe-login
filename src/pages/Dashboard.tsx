import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { CircularProgress } from "@/components/dashboard/CircularProgress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Mic, 
  Library, 
  Settings, 
  Play, 
  Download, 
  Clock, 
  CheckCircle, 
  Circle, 
  Sparkles,
  Search,
  Filter,
  TrendingUp,
  Users,
  Headphones,
  FileText
} from "lucide-react";

export default function Dashboard() {
  const [podcasts] = useState([
    {
      id: 1,
      title: "AI and the Future of Work",
      duration: "12:45",
      status: "completed",
      createdAt: "2 days ago",
      description: "Exploring how artificial intelligence is reshaping the workplace",
      priority: "high"
    },
    {
      id: 2,
      title: "Climate Change Solutions",
      duration: "8:23",
      status: "processing", 
      createdAt: "1 day ago",
      description: "Innovative approaches to tackling climate challenges",
      priority: "medium"
    },
    {
      id: 3,
      title: "Digital Marketing Trends 2025",
      duration: "15:12",
      status: "completed",
      createdAt: "5 hours ago",
      description: "Latest trends and strategies in digital marketing",
      priority: "low"
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
      case "medium": return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
      case "low": return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between p-6">
            <div>
              <h1 className="text-2xl font-bold">Welcome Back</h1>
              <p className="text-muted-foreground">Your smart assistant for seamless productivity</p>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-primary hover:bg-primary/90">
                <Sparkles className="h-4 w-4 mr-2" />
                Ask AI
              </Button>
              <Button variant="outline">Get Task Update</Button>
              <Button variant="outline">Create Workspace</Button>
              <Button variant="outline">Connect Apps</Button>
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-6">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* AI Greeting Card */}
              <Card className="glass-card bg-gradient-to-r from-primary/5 to-accent/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-xl font-semibold mb-2">Hello Keira!</h2>
                      <p className="text-muted-foreground">How can I help you today?</p>
                      <div className="flex items-center gap-2 mt-4">
                        <Badge className="bg-green-500/10 text-green-700 dark:text-green-300">8 Progress</Badge>
                        <Badge className="bg-purple-500/10 text-purple-700 dark:text-purple-300">10 Inquiries</Badge>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-32 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <Mic className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatsCard
                  title="Total Podcasts"
                  value="456 Podcasts"
                  change="+12%"
                  trend="up"
                  icon={<FileText className="h-6 w-6 text-primary" />}
                />
                <StatsCard
                  title="Completed Podcasts"
                  value="125 Podcasts"
                  change="+12%"
                  trend="up"
                  icon={<CheckCircle className="h-6 w-6 text-green-500" />}
                />
                <StatsCard
                  title="Ongoing Podcasts"
                  value="108 Podcasts"
                  change="+12%"
                  trend="up"
                  icon={<Circle className="h-6 w-6 text-yellow-500" />}
                />
              </div>

              {/* AI Analytics */}
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>AI Analytics</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Sort
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <CircularProgress
                      title="On-Time Completion"
                      percentage={85}
                      icon={<CheckCircle className="h-5 w-5 text-green-500" />}
                      color="stroke-green-500"
                    />
                    <CircularProgress
                      title="Average Generation Time"
                      percentage={72}
                      icon={<Clock className="h-5 w-5 text-purple-500" />}
                      color="stroke-purple-500"
                    />
                    <CircularProgress
                      title="User Satisfaction"
                      percentage={94}
                      icon={<TrendingUp className="h-5 w-5 text-blue-500" />}
                      color="stroke-blue-500"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* All Tasks */}
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <CardTitle className="text-lg">All Tasks</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Filter className="h-4 w-4 mr-1" />
                      Sort
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Not Started</span>
                    <Badge className="bg-blue-500 text-white">2</Badge>
                  </div>
                  
                  {podcasts.slice(0, 2).map((podcast) => (
                    <div key={podcast.id} className="p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-medium text-sm">{podcast.title}</h4>
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <span className="text-xs">⋯</span>
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{podcast.description}</p>
                      <div className="flex items-center justify-between text-xs">
                        <Badge className={getPriorityColor(podcast.priority)}>
                          {podcast.priority}
                        </Badge>
                        <span className="text-muted-foreground">Due: {podcast.createdAt}</span>
                      </div>
                    </div>
                  ))}

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium">On Progress</span>
                      <Badge className="bg-yellow-500 text-white">1</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Reminders */}
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between pb-3">
                  <CardTitle className="text-lg">Daily Reminders</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Filter className="h-4 w-4 mr-1" />
                    Sort
                  </Button>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">Check Daily Progress</span>
                      <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 ml-auto">High</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Review tasks and updates daily</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-medium">Provide Feedback Tasks</span>
                      <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300 ml-auto">Low</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Comments for task improvements</p>
                  </div>
                  
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium">Set Tomorrow's Goals</span>
                      <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300 ml-auto">Medium</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">Plan priorities for next day</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}