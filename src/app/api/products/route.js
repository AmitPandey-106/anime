import { NextResponse } from "next/server";
import mongoose from "mongoose"; 
import { mongoUrl } from "@/lib/db"; 
import { AnimeName } from "@/lib/model/animenames";
import { Signupschema } from "@/lib/model/signup";
import PageLoader from "next/dist/client/page-loader";

let isConnected = false; 


export async function GET() {
    let data = [];
    let success = true;

    try {
        if (!isConnected) {
            await mongoose.connect(mongoUrl, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            isConnected = true;
            console.log("MongoDB connected");
        }

        data = await Signupschema.find();
        console.log("Fetched Data:", data);

    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
        success = false; 
        return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
    }

    return NextResponse.json({ result: data, success });
}

export async function POST(request){
    const payload = await request.json();
    
    await mongoose.connect(mongoUrl);
    let signupuser = new Signupschema(payload);
    
    const result = await signupuser.save();
    console.log(result);
    return NextResponse.json({result, success:true})
}
