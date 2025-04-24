import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function ProfileCard() {
    return (
        <Card className="w-full md:w-98">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <Avatar className="w-16 h-16 md:w-20 md:h-20">
                    <AvatarImage src="/avatars/photo_cv.jpg" alt="avatar" />
                    <AvatarFallback>TD</AvatarFallback>
                </Avatar>
                <h1 className="text-xl md:text-2xl text-[#515151]">Dev</h1>
            </CardHeader>
            <CardContent>
                <div className="font-medium text-lg md:text-xl flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="font-bold text-center sm:text-left">
                        <p>Tom</p>
                        <p>DOGUET</p>
                    </div>
                    <a href="#" className="border border-[#B8B8B8] rounded-4xl px-6 md:px-10 py-1 w-full sm:w-auto text-center">
                        <p>Contact</p>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}