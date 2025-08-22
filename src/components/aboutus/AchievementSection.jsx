import { Box, Typography, Grid, Container } from "@mui/material"

const RuchiraAchievementsSection = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={4} alignItems="center">
                {/* Left side - Text content */}
                <Grid item xs={12} md={6} maxWidth={"700px"} justifyContent={"space-between"}>
                    <Box sx={{ pr: { md: 4 } }}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#333",
                                mb: 3,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            She has fiercely led her team to establish Lokmat MahaMarathon as the most sought after running brand in
                            the state of Maharashtra.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#333",
                                mb: 3,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            With the event now being conducted in every major city of Maharashtra including Maha Mumbai, Nashik,
                            Aurangabad, Nagpur, Kolahpur and Pune.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#333",
                                mb: 3,
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Her brand Lokmat Campus Club recently made the Asia Book of Records for maximum children drawing on a
                            single day with 4.75 Lakh children in over 1000 schools participating in 35 districts of Maharashtra and
                            Goa.
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: "16px",
                                lineHeight: 1.8,
                                color: "#333",
                                fontWeight: 500,
                                fontFamily: "Poppins, sans-serif",
                            }}
                        >
                            Ruchira is a multi-talented, visionary and a fierce leader and entrepreneur, who never fails to inspire
                            the best in her audience,be it her colleagues,the business community or the youth.
                        </Typography>
                    </Box>
                </Grid>

                {/* Right side - Image with golden background */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            left: { xs: 0, md: "80px" },
                        }}
                    >
                        {/* Golden curved background */}
                        <Box
                            sx={{
                                position: "absolute",
                                width: " 25.9375rem",
                                height: "29.1875rem",
                                background: "#f1cf87",
                                borderRadius: "60px",
                                zIndex: 1,
                                right: { xs: 0, md: "-20px" },
                                top: "20px",
                            }}
                        />

                        {/* Profile image */}
                        <Box
                            component="img"
                            src="/images/image-266.png"
                            alt="Ruchira at her office desk"
                            sx={{
                                width: " 25.9375rem",
                                height: "29.1875rem",
                                borderRadius: "40px",
                                zIndex: 2,
                                position: "relative",
                                right: { xs: 0, md: "22px" },
                                bottom: { xs: 0, md: "20px" },
                                objectFit: "cover",
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RuchiraAchievementsSection
