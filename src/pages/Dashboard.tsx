import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Play, 
  Download, 
  Eye,
  Edit,
  FileText,
  Users,
  Clock,
  Calendar,
  RefreshCw,
  Plus
} from "lucide-react";

export default function Dashboard() {
  const [podcasts] = useState([
    {
      id: 1,
      title: "Fusionex fallout_the sequel - by Emmanuel Samarathisa.pdf",
      fileSize: "17.2 kB",
      status: "Pending",
      date: "Aug 28, 2025, 05:40 AM",
      category: "general",
      transcripts: 0,
      audioFiles: 0
    },
    {
      id: 2,
      title: "Fusionex fallout_the sequel - by Emmanuel Samarathisa.pdf", 
      fileSize: "17.2 kB",
      status: "Pending",
      date: "Aug 27, 2025, 04:57 PM",
      category: "general",
      transcripts: 0,
      audioFiles: 0
    }
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Welcome back, chien.hui.yee@gmail.com!
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage and organize your AI-generated podcasts
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              New Podcast
            </Button>
            <Button variant="ghost" size="sm">
              Logout
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-500" />
                <p className="text-sm text-muted-foreground">Total Documents</p>
              </div>
              <p className="text-3xl font-bold">2</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <p className="text-sm text-muted-foreground">Total Podcasts</p>
              </div>
              <p className="text-3xl font-bold">0</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-500" />
                <p className="text-sm text-muted-foreground">Total Duration</p>
              </div>
              <p className="text-3xl font-bold">0 min</p>
            </div>
          </Card>
          
          <Card className="p-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
              <p className="text-3xl font-bold">0</p>
            </div>
          </Card>
        </div>

        {/* Podcast Library */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Podcast Library</CardTitle>
            <p className="text-muted-foreground">Search, filter, and manage your generated podcasts</p>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Search podcasts by title or content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>
              <div className="flex gap-2">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Podcast Items */}
            <div className="space-y-4">
              {podcasts.map((podcast) => (
                <div key={podcast.id} className="border rounded-lg p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="h-6 w-6 text-purple-600" />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <h3 className="font-medium text-foreground">{podcast.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {podcast.status}
                          </Badge>
                          <span>{podcast.date}</span>
                          <Badge variant="secondary" className="text-xs">
                            {podcast.category}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <span>{podcast.fileSize}</span>
                          <span>{podcast.transcripts} transcripts</span>
                          <span>{podcast.audioFiles} audio files</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full">
                          <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
                            <span>Processing...</span>
                            <span>Processing...</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-1">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '35%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Play className="h-4 w-4 mr-1" />
                        Play
                      </Button>
                      <Button variant="ghost" size="sm" disabled>
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}