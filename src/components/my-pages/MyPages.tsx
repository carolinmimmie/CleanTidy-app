import { Box } from "@mui/system";
import MypagesHero from "./MypagesHero";
import CompletedBookings from "./CompletedBookings";
import CurrentBookings from "./CurrentBookings";

const MyPages = () => {
  return (
    <>
      <MypagesHero></MypagesHero>
      <Box className="my-pages">
        <CurrentBookings></CurrentBookings>
        <CompletedBookings></CompletedBookings>
      </Box>
    </>
  );
};

export default MyPages;
