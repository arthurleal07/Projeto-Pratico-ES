import { createBrowserRouter } from "react-router";
import { Splash } from "./pages/Splash";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";
import { Materias } from "./pages/Materias"; // NOVO IMPORT
import { Pomodoro } from "./pages/Pomodoro";
import { Flashcards } from "./pages/Flashcards";
import { CreateFlashcard } from "./pages/CreateFlashcard";
import { Agenda } from "./pages/Agenda";
import { Summaries } from "./pages/Summaries";
import { Statistics } from "./pages/Statistics";
import { Settings } from "./pages/Settings";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Splash />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/materias",
        element: <Materias />,
      },
      {
        path: "/pomodoro",
        element: <Pomodoro />,
      },
      {
        path: "/flashcards",
        element: <Flashcards />,
      },
      {
        path: "/flashcards/create",
        element: <CreateFlashcard />,
      },
      {
        path: "/agenda",
        element: <Agenda />,
      },
      {
        path: "/summaries",
        element: <Summaries />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);