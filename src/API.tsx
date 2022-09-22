import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL!,
  process.env.REACT_APP_SUPABASE_ANON_KEY!
);

export type Question = {
  id: number;
  content: string;
  created_at?: string;
};

export type Answers = {
  id: number;
  question_id: number;
  answer: string;
  is_correct: boolean;
};

export const getQuestions = async (): Promise<Array<Question>> => {
  const { data: questions, error } = await supabase
    .from("questions")
    .select("*");
  if (error) throw error;
  console.log(questions);
  return questions;
};

export const getAnswers = async (): Promise<Array<Answers>> => {
  const { data: answers, error } = await supabase.from("answers").select("*");
  if (error) throw error;
  console.log(answers);
  return answers;
};
