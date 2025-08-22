import { Box, Typography, Grid, Container, styled, Card, CardMedia } from "@mui/material";

const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "400px",
    margin: "auto",
    borderRadius: "34px 0px 150px 0px",
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
    background: "#f5ebd8ff",
}));

const DecorativeCircle = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: -40,
    left: -30,
    width: 120,
    height: 120,
    borderRadius: "50%",
    border: "2px solid #f4cf87",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 20,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
}));

// ======================== IMAGE CARD ========================
const ImageCard = () => {
    return (
        <>
            <StyledCard>
                <CardMedia
                    component="img"
                    height="406"
                    width={399}
                    image="/images/image-removebg-preview-2.png"
                    alt="Speaker with microphone"
                    sx={{ objectFit: "cover", zIndex: 10 }}

                />
                {/* Main Image */}

                {/* Decorative Circle */}
                <DecorativeCircle>
                    
                </DecorativeCircle>

            </StyledCard>
        </>
    );
};

const WhoIsRuchiraSection = () => {
    const text = 'LOVE YOURSELF BE HAPPY KEEP SHINE GIVE PRIORITY YOURSELF';
    const letters = text.split("");
    const angleStep = 360 / letters.length;
    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Typography
                variant="h3"
                component="h2"
                sx={{
                    textAlign: "center",
                    mb: 6,
                    fontWeight: 600,
                    color: "#383086",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: { xs: "2rem", md: "2rem" },
                }}
            >
                Who is Ruchira Darda?
            </Typography>

            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={7} maxWidth={{ xs: "100%", md: "60%" }}>
                    <Box sx={{ pr: { md: 4 } }}>
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Ruchira is a SoBo girl from Cathedral and John Connon High School, a Bachelor's degree in Commerce from
                            H.R.College, Mumbai and an LLB from Government Law College, Mumbai.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is an ACC Certified Coach and is in the process of becoming an ICF certified coach.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is a Certified NLP Practitioner.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is an author of 8 children's books.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is a Certified Parenting & Family Coach, Mindfulness Practitioner, a sought after Motivational Speaker
                            and a columnist with over 300 columns published in Lokmat Times.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is the Director of Lokmat MahaMarathon, a six city circuit which saw over 55000 participants in the
                            2023-24 season.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                mb: 2,
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is the Founder President of Wider Opportunities for Women – a women's club formed with the sole intent
                            to further the quest for learning and experiencing the world.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                lineHeight: 1.5,
                                fontSize: "1rem",
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She is the Director of Lokmat Campus Club, a platform for students to learn, experience and compete. It
                            has an enormous strength of 2 lakh members across the state of Maharashtra.
                        </Typography>
                    </Box>
                </Grid>

                {/* RIGHT COLUMN (FIXED ✅) */}
                <Grid item xs={12} md={5} ml={3}>
                    <ImageCard />
                </Grid>
            </Grid>
        </Container >
    )
}



export default WhoIsRuchiraSection
