
'use server';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

export type FormState = {
  message: string;
  success: boolean;
};

export async function subscribeToNewsletter(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = emailSchema.safeParse({
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.email?.[0] || 'Invalid input.',
      success: false,
    };
  }

  const email = validatedFields.data.email;

  try {
    // Here you would typically save the email to a database or mailing list service.
    // For this demo, we'll just log it to the console.
    console.log(`New newsletter subscription from: ${email}`);

    return {
      message: "Thank you for subscribing! We'll keep you updated on our launch.",
      success: true,
    };
  } catch (e) {
    console.error(e);
    return {
      message: 'An unexpected error occurred. Please try again later.',
      success: false,
    };
  }
}
