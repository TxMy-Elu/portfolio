import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProfileCard() {
    return (
        <Card className="w-98">
            <CardHeader className="flex justify-between">
                <Avatar className="w-20 h-20">
                    <AvatarImage src="/avatars/photo_cv.jpg" alt="avatar" />
                    <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl text-[#515151]">Dev</h1>
            </CardHeader>
            <CardContent>
                <div className="font-medium text-xl flex justify-between items-center">
                    <div className="font-bold">
                        <p>Tom</p>
                        <p>DOGUET</p>
                    </div>
                    <a href="#" className="border border-[#B8B8B8] rounded-4xl px-10 py-1">
                        <p>Contact</p>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}