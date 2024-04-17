import mongoose from 'mongoose';
import { NextResponse } from "next/server";
import {connectDb} from "../../lib/mongodb";
import Contact from "../../models/contact"
export async function POST(req){
    const {industry,enquiry,name,contact,email,message} = await req.json();
    try {
        await connectDb();
        await Contact.create({industry,enquiry,name,contact,email,message})
        return NextResponse.json({
            data : ["success"] ,success : true,
        })
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
          let errorList = [];
          for (let e in error.errors) {
            errorList.push(error.errors[e].message);
          }
          console.log(errorList);
          return NextResponse.json({ data: errorList });
        } else {
          return NextResponse.json({ data: ["Unable to send message."] });
        }
      }
    // console.log(industry,enquiry,name,contact,email,message);
}