import Logo from "@/components/img/Frame 12.svg";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export function Auth(){
    return (
        <div className='auth'>
            <Tabs defaultValue="account" className="table">
                {/*<TabsList className="grid w-full grid-cols-2">*/}
                {/*  <TabsTrigger value="account">Account</TabsTrigger>*/}
                {/*  <TabsTrigger value="password">Password</TabsTrigger>*/}
                {/*</TabsList>*/}
                <TabsContent value="account">
                    <Card>
                        <CardHeader>
                            <CardTitle className='txt_1'>Добро пожаловать!</CardTitle>
                            <line className='line'></line>
                            {/*<CardDescription>*/}
                            {/*  Make changes to your account here. Click save when you're done.*/}
                            {/*</CardDescription>*/}
                            <TabsList className="form_2" >
                                <TabsTrigger className='line2' value="account">Войти</TabsTrigger>
                                <TabsTrigger value="password">Зарегестрироваться</TabsTrigger>
                            </TabsList>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="name">Email</Label>
                                <Input id="name" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="username">Пароль</Label>
                                <Input id="username" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='btn1'>Далее</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle className='txt_1'>Добро пожаловать!</CardTitle>
                            <line className='line'></line>
                            {/*<CardDescription>*/}
                            {/*  Change your password here. After saving, you'll be logged out.*/}
                            {/*</CardDescription>*/}
                            <TabsList className="form_2">
                                <TabsTrigger className='line2' value="account">Войти</TabsTrigger>
                                <TabsTrigger value="password">Зарегестрироваться</TabsTrigger>
                            </TabsList>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="space-y-1">
                                <Label htmlFor="current">Email</Label>
                                <Input id="current" type="email" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Пароль</Label>
                                <Input id="new" type="password" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="new">Подтвердите пароль</Label>
                                <Input id="new" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button className='btn1' >Далее</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>

        </div>
    )
}