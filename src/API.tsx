import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

export type Questions = {
  id: number;
  conten: string;
};

export type Answers = {
  id: number;
  question_id: number;
  answer: string;
  is_correct: boolean;
};

export const postQuestions = async () => {
  const { data, error } = await supabase.from("questions").select("*");

  console.log(data, error);
  return data;
};

export const postAnswers = async () => {
  const { data, error } = await supabase.from("answers").select("*");

  return data;
};
