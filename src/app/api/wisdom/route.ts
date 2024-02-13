import { NextRequest, NextResponse } from "next/server";
import {DataModel} from "@/models/Common";
import {WisdomModel} from "@/models/Wisdom";
import {BackgroundModel} from "@/models/Background";
import * as console from "console";

export async function GET(request: NextRequest) {
    try {
        const wisdom = require('/public/data/ko/wisdom.json') as DataModel<WisdomModel>;
        const filtered = wisdom.data[new Date().getSeconds()];
        console.log("index", new Date().getSeconds());
        return new NextResponse(JSON.stringify({ ...filtered }), {
            status: 200,
        });
    } catch (e) {
        return new NextResponse(null, { status: 500 });
    }
}
