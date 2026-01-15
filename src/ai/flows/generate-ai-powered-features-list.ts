'use server';
/**
 * @fileOverview Generates a list of AI-powered features for the PawMe AI Companion.
 *
 * - generateAIPoweredFeaturesList - A function that generates the AI features list.
 * - AIPoweredFeaturesListInput - The input type for the generateAIPoweredFeaturesList function.
 * - AIPoweredFeaturesListOutput - The return type for the generateAIPoweredFeaturesList function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPoweredFeaturesListInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
});
export type AIPoweredFeaturesListInput = z.infer<typeof AIPoweredFeaturesListInputSchema>;

const AIPoweredFeaturesListOutputSchema = z.object({
  features: z.array(z.string()).describe('A list of AI-powered features.'),
});
export type AIPoweredFeaturesListOutput = z.infer<typeof AIPoweredFeaturesListOutputSchema>;

export async function generateAIPoweredFeaturesList(
  input: AIPoweredFeaturesListInput
): Promise<AIPoweredFeaturesListOutput> {
  return generateAIPoweredFeaturesListFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPoweredFeaturesListPrompt',
  input: {schema: AIPoweredFeaturesListInputSchema},
  output: {schema: AIPoweredFeaturesListOutputSchema},
  prompt: `You are an AI expert specializing in robotic pet companions.

  Generate a list of compelling AI-powered features for {{productName}} that would be attractive to potential Kickstarter backers. Focus on innovative and practical applications of AI in enhancing the pet companion experience. Make the features benefit the user, the robotic pet, or both.
  The list should only contain the name of the feature and a short description of the feature.
  Features:
  `,
});

const generateAIPoweredFeaturesListFlow = ai.defineFlow(
  {
    name: 'generateAIPoweredFeaturesListFlow',
    inputSchema: AIPoweredFeaturesListInputSchema,
    outputSchema: AIPoweredFeaturesListOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
