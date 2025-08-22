import { Box, Typography, Grid, Container } from "@mui/material"

const LaurelWreath = ({ title, img }) => (
  <Box
    sx={{
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 120,
      height: 120,
      margin: "0 auto 20px",
      mt: 10,
    }}
  >
    <Box>
      <img src={img} alt={title} style={{ width: "10rem%", height: "13.625rem" }} />
    </Box>
  </Box>
)

const RecognitionsSection = () => {
  const recognitions = [
    {
      title: "CERTIFIED",
      description:
        "B.Com LLB, NLP Practitioner, ACC Certified Coach, Certified Sex Educator, Certified Personal Counsellor",
      img: "/images/image-260.png",
    },
    {
      title: "AUTHOR",
      description: "Author of 8 children’s books and a columnist in Lokmat Times.",
      img: "/images/image-261.png",
    },

    {
      title: "DIRECTOR",
      description: "Lokmat MahaMarathon Lokmat Campus Club Wider Opportunities for Women",
      img: "/images/image-262.png",
    },
  ]

  return (
    <Box
      sx={{
        background: "#383086",
        padding: { xs: "40px 20px", md: "60px 40px" },
        width: "100%",
        margin: "0 auto",
        height: "40.75rem",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", marginBottom: "40px" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#f1cf87",
              fontWeight: 500,
              fontSize: { xs: "24px", md: "24px" },
              marginBottom: "16px",
              letterSpacing: "2px",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            RECOGNITIONS
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "white",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: 1.6,
              maxWidth: "530px",
              fontWeight: 500,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            Ruchira has coached over several individuals across the world on the Science of Personalities, she not only inspires adults but kids too. She has published over 300 columns along with several children’s books.
          </Typography>
        </Box>

        {/* Recognition Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: 19,
            flexWrap: "nowrap", 
            width: "100%",
          }}
        >
          {recognitions.map((recognition, index) => (
            <Box
              key={index}
              sx={{
                flex: "1 1 0",
                textAlign: "center",
                padding: "20px",
                minWidth: '30%', // prevents shrinking issues
                
              }}
            >
              <LaurelWreath title={recognition.title} img={recognition.img} />
              <Typography
                variant="body2"
                sx={{
                  color: "white",
                  fontSize: { xs: "13px", md: "16px" },
                  lineHeight: 1.5,
                  textAlign: "center",
                  fontWeight: 500,
                  fontFamily: "Poppins, sans-serif",
                  mt: 10,
                  width: "120%",
                  ml: "-45px",
                }}
              >
                {recognition.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

export default RecognitionsSection
