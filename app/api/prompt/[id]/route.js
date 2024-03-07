import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const dynamic = "force-dynamic";
export const GET = async (request, { params }) => {
    try {
        const prompts = await Prompt.find().populate({
            path: "creator",
        });

        const response = new Response(JSON.stringify(prompts), {
            status: 200,
        });

        // Add a unique identifier to the URL to force a cache-busting reload
        const url = new URL(request.url);
        url.searchParams.set("t", Date.now());
        response.headers.set(
            "Cache-Control",
            "no-cache, no-store, must-revalidate"
        );
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Expires", "0");
        response.headers.set("Location", url.toString());

        return response;
    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
};

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectDB();

        // Find the existing prompt by ID
        const existingPrompt = await Prompt.findById(params.id);

        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }

        // Update the prompt with new data
        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();

        return new Response("Successfully updated the Prompts", {
            status: 200,
        });
    } catch (error) {
        return new Response("Error Updating Prompt", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectDB();

        // Find the prompt by ID and remove it
        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting prompt", { status: 500 });
    }
};
