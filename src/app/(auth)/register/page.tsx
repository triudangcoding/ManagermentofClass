import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Make changes to your account here.
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
