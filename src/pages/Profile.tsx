import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  User, 
  Mail, 
  Lock, 
  Save, 
  CreditCard, 
  Settings, 
  Moon, 
  Sun, 
  Bell, 
  LogOut,
  Shield,
  CheckCircle,
  AlertCircle,
  Eye,
  EyeOff
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function Profile() {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [user, setUser] = useState({
    firstName: "Chien Hui",
    lastName: "Yee",
    email: "chien.hui.yee@gmail.com",
    initials: "CH",
    memberSince: "Aug 2025",
    plan: "Pro Plan",
    status: "Active"
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const [billing, setBilling] = useState({
    cardNumber: "**** **** **** 4242",
    expiryDate: "12/25",
    cardType: "Visa",
    billingAddress: {
      street: "123 Main Street",
      city: "San Francisco",
      state: "CA",
      zipCode: "94102",
      country: "United States"
    }
  });

  const [settings, setSettings] = useState({
    theme: "light",
    notifications: {
      email: true,
      push: false,
      marketing: true,
      updates: true
    },
    privacy: {
      profileVisible: true,
      activityVisible: false
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Password strength calculation
  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    return strength;
  };

  const passwordStrength = calculatePasswordStrength(passwords.new);
  const getPasswordStrengthText = (strength: number) => {
    if (strength === 0) return "";
    if (strength <= 25) return "Very Weak";
    if (strength <= 50) return "Weak";
    if (strength <= 75) return "Good";
    return "Strong";
  };

  const getPasswordStrengthColor = (strength: number) => {
    if (strength <= 25) return "bg-red-500";
    if (strength <= 50) return "bg-orange-500";
    if (strength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleSaveProfile = () => {
    // Validation
    if (!user.firstName.trim() || !user.lastName.trim()) {
      toast({
        title: "Validation Error",
        description: "First name and last name are required.",
        variant: "destructive"
      });
      return;
    }

    if (!user.email.trim() || !/\S+@\S+\.\S+/.test(user.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Profile updated",
      description: "Your profile information has been saved successfully.",
    });
    setIsEditing(false);
  };

  const handleChangePassword = () => {
    if (!passwords.current) {
      toast({
        title: "Current password required",
        description: "Please enter your current password.",
        variant: "destructive"
      });
      return;
    }

    if (passwordStrength < 75) {
      toast({
        title: "Password too weak",
        description: "Password must be at least 8 characters with uppercase, lowercase, numbers, and special characters.",
        variant: "destructive"
      });
      return;
    }

    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Password mismatch", 
        description: "New password and confirmation don't match.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Password changed",
      description: "Your password has been updated successfully.",
    });
    
    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleUpdateBilling = () => {
    toast({
      title: "Billing updated",
      description: "Your billing information has been updated successfully.",
    });
  };

  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard")}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>

        {/* Profile Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
          <p className="text-muted-foreground">Manage your account information and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback className="bg-primary/10 text-primary text-xl font-semibold">
                        {user.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Profile Information
                      </CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-1">
                      {user.plan}
                    </Badge>
                    <div className="text-sm text-muted-foreground">{user.status}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={user.firstName}
                      onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Enter your first name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={user.lastName}
                      onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Enter your last name"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      disabled={!isEditing}
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Member Since</Label>
                    <Input value={user.memberSince} disabled />
                  </div>

                  <div className="space-y-2">
                    <Label>Account Status</Label>
                    <Input value={user.status} disabled />
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  {!isEditing ? (
                    <Button onClick={() => setIsEditing(true)}>
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button onClick={handleSaveProfile}>
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Account Statistics */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Account Statistics</CardTitle>
                <CardDescription>Your podcast creation overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-bold text-primary mb-2">12</div>
                    <div className="text-sm text-muted-foreground">Podcasts Created</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-bold text-primary mb-2">4h 32m</div>
                    <div className="text-sm text-muted-foreground">Total Duration</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/50">
                    <div className="text-3xl font-bold text-primary mb-2">1,247</div>
                    <div className="text-sm text-muted-foreground">Total Downloads</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Password & Security
                </CardTitle>
                <CardDescription>Manage your account security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password *</Label>
                    <div className="relative">
                      <Input
                        id="current-password"
                        type={showPassword.current ? "text" : "password"}
                        value={passwords.current}
                        onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                        placeholder="Enter current password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword({ ...showPassword, current: !showPassword.current })}
                      >
                        {showPassword.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password *</Label>
                    <div className="relative">
                      <Input
                        id="new-password"
                        type={showPassword.new ? "text" : "password"}
                        value={passwords.new}
                        onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                        placeholder="Enter new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword({ ...showPassword, new: !showPassword.new })}
                      >
                        {showPassword.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    {passwords.new && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Progress value={passwordStrength} className="flex-1" />
                          <span className="text-sm font-medium">{getPasswordStrengthText(passwordStrength)}</span>
                        </div>
                        <div className="text-xs text-muted-foreground space-y-1">
                          <div className="flex items-center gap-2">
                            {passwords.new.length >= 8 ? 
                              <CheckCircle className="h-3 w-3 text-green-500" /> : 
                              <AlertCircle className="h-3 w-3 text-red-500" />
                            }
                            At least 8 characters
                          </div>
                          <div className="flex items-center gap-2">
                            {/[A-Z]/.test(passwords.new) ? 
                              <CheckCircle className="h-3 w-3 text-green-500" /> : 
                              <AlertCircle className="h-3 w-3 text-red-500" />
                            }
                            Contains uppercase letter
                          </div>
                          <div className="flex items-center gap-2">
                            {/[0-9]/.test(passwords.new) ? 
                              <CheckCircle className="h-3 w-3 text-green-500" /> : 
                              <AlertCircle className="h-3 w-3 text-red-500" />
                            }
                            Contains number
                          </div>
                          <div className="flex items-center gap-2">
                            {/[^A-Za-z0-9]/.test(passwords.new) ? 
                              <CheckCircle className="h-3 w-3 text-green-500" /> : 
                              <AlertCircle className="h-3 w-3 text-red-500" />
                            }
                            Contains special character
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password *</Label>
                    <div className="relative">
                      <Input
                        id="confirm-password"
                        type={showPassword.confirm ? "text" : "password"}
                        value={passwords.confirm}
                        onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                        placeholder="Confirm new password"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword({ ...showPassword, confirm: !showPassword.confirm })}
                      >
                        {showPassword.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    {passwords.confirm && passwords.new !== passwords.confirm && (
                      <div className="flex items-center gap-2 text-red-500 text-xs">
                        <AlertCircle className="h-3 w-3" />
                        Passwords do not match
                      </div>
                    )}
                  </div>
                </div>

                <Button 
                  onClick={handleChangePassword}
                  disabled={!passwords.current || !passwords.new || !passwords.confirm || passwordStrength < 75}
                  className="w-full sm:w-auto"
                >
                  <Lock className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Billing Tab */}
          <TabsContent value="billing" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Method
                </CardTitle>
                <CardDescription>Manage your payment information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      VISA
                    </div>
                    <div>
                      <div className="font-medium">{billing.cardNumber}</div>
                      <div className="text-sm text-muted-foreground">Expires {billing.expiryDate}</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Primary</Badge>
                </div>

                <Separator />

                <div>
                  <h3 className="font-medium mb-4">Billing Address</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="street">Street Address</Label>
                      <Input
                        id="street"
                        value={billing.billingAddress.street}
                        onChange={(e) => setBilling({
                          ...billing,
                          billingAddress: { ...billing.billingAddress, street: e.target.value }
                        })}
                        placeholder="Enter street address"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={billing.billingAddress.city}
                        onChange={(e) => setBilling({
                          ...billing,
                          billingAddress: { ...billing.billingAddress, city: e.target.value }
                        })}
                        placeholder="Enter city"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={billing.billingAddress.state}
                        onChange={(e) => setBilling({
                          ...billing,
                          billingAddress: { ...billing.billingAddress, state: e.target.value }
                        })}
                        placeholder="Enter state"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={billing.billingAddress.zipCode}
                        onChange={(e) => setBilling({
                          ...billing,
                          billingAddress: { ...billing.billingAddress, zipCode: e.target.value }
                        })}
                        placeholder="Enter ZIP code"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country</Label>
                      <Select 
                        value={billing.billingAddress.country} 
                        onValueChange={(value) => setBilling({
                          ...billing,
                          billingAddress: { ...billing.billingAddress, country: value }
                        })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="United States">United States</SelectItem>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                          <SelectItem value="Australia">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={handleUpdateBilling}>
                    <Save className="h-4 w-4 mr-2" />
                    Update Billing Information
                  </Button>
                  <Button variant="outline">
                    Add New Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  User Preferences
                </CardTitle>
                <CardDescription>Customize your account settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-3">Theme</h3>
                    <Select 
                      value={settings.theme} 
                      onValueChange={(value) => setSettings({ ...settings, theme: value })}
                    >
                      <SelectTrigger className="w-full md:w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">
                          <div className="flex items-center gap-2">
                            <Sun className="h-4 w-4" />
                            Light Mode
                          </div>
                        </SelectItem>
                        <SelectItem value="dark">
                          <div className="flex items-center gap-2">
                            <Moon className="h-4 w-4" />
                            Dark Mode
                          </div>
                        </SelectItem>
                        <SelectItem value="system">
                          <div className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            System Default
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-3">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive emails about account activity</div>
                        </div>
                        <Switch
                          checked={settings.notifications.email}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              notifications: { ...settings.notifications, email: checked }
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Push Notifications</div>
                          <div className="text-sm text-muted-foreground">Receive browser notifications</div>
                        </div>
                        <Switch
                          checked={settings.notifications.push}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              notifications: { ...settings.notifications, push: checked }
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Marketing Updates</div>
                          <div className="text-sm text-muted-foreground">Receive promotional content and offers</div>
                        </div>
                        <Switch
                          checked={settings.notifications.marketing}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              notifications: { ...settings.notifications, marketing: checked }
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Product Updates</div>
                          <div className="text-sm text-muted-foreground">Get notified about new features</div>
                        </div>
                        <Switch
                          checked={settings.notifications.updates}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              notifications: { ...settings.notifications, updates: checked }
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="font-medium mb-3">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Profile Visibility</div>
                          <div className="text-sm text-muted-foreground">Allow others to view your profile</div>
                        </div>
                        <Switch
                          checked={settings.privacy.profileVisible}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              privacy: { ...settings.privacy, profileVisible: checked }
                            })
                          }
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">Activity Visibility</div>
                          <div className="text-sm text-muted-foreground">Show your podcast activity to others</div>
                        </div>
                        <Switch
                          checked={settings.privacy.activityVisible}
                          onCheckedChange={(checked) =>
                            setSettings({
                              ...settings,
                              privacy: { ...settings.privacy, activityVisible: checked }
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSaveSettings}>
                    <Save className="h-4 w-4 mr-2" />
                    Save Settings
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Logout Section */}
            <Card className="glass-card border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600">Account Actions</CardTitle>
                <CardDescription>Manage your account session</CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="destructive"
                  onClick={handleLogout}
                  className="w-full sm:w-auto"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Log Out
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}