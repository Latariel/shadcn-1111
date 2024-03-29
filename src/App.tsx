import {Header} from "@/components/header";
import {Auth} from "@/components/auth/auth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function App() {


  return (
<div>
<Header/>
 <Auth/>


</div>
  )
}

export default App
