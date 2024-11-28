import React, { useState } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Grid,
  Pagination,
  Stack,
  Breadcrumbs,
  Link,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
} from "@mui/material";

function Courses() {
  const products = [
    {
      title: "School of Engineering",
      categories: "Foundation Level",
      description: "Foundation Year in IT – Kingston University (UK)",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Languages",
      categories: "Certificate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Art & Design",
      categories: "Higher National Diploma Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Life Science",
      categories: "Diploma Level",
      description: "Reliable and durable business laptop.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Computing",
      categories: "Higher National Certificate",
      description: "Premium laptop for demanding tasks.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Management & Law",
      categories: "Undergraduate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Postgraduate Level",
      description: "Foundation Year in IT – Kingston University (UK)",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Doctorate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Reliable and durable business laptop.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Premium laptop for demanding tasks.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
    {
      title: "School of Engineering",
      categories: "Undergraduate Level",
      description: "Stylish and efficient laptop for professionals.",
      imageUrl: "https://via.placeholder.com/400", // Placeholder image URL
    },
  ];

  // Pagination, search, and filter states
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTitles, setSelectedTitles] = useState([]);
  const itemsPerPage = 8;

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page when searching
  };

  // Handle category filter change
  const handleCategoryChange = (event) => {
    const category = event.target.name;
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  // Handle title filter change
  const handleTitleChange = (event) => {
    const title = event.target.name;
    setSelectedTitles((prev) =>
      prev.includes(title)
        ? prev.filter((t) => t !== title)
        : [...prev, title]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategories([]);
    setSelectedTitles([]);
  };

  // Extract unique categories and titles from products
  const categories = [...new Set(products.map((product) => product.categories))];
  const titles = [...new Set(products.map((product) => product.title))];

  // Filter products based on search term, selected categories, and selected titles
  const filteredProducts = products.filter(
    (product) =>
      (product.title.toLowerCase().includes(searchTerm) ||
        product.categories.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)) &&
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.categories)) &&
      (selectedTitles.length === 0 || selectedTitles.includes(product.title))
  );

  // Get the current items to display based on the page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <section
      style={{
        backgroundColor: "#f2f3f4",
        width: "100%",
        margin: "0 auto",
        marginBottom: "30px",
      }}
    >
      <Container maxWidth="xl" sx={{ padding: 3, paddingTop: "50px" }}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{ marginBottom: 2, fontFamily: "Noto Kufi Arabic, sans-serif" }}
        >
          <Link href="/" underline="hover" color="inherit">
            Home
          </Link>
          <Link href="/courses" underline="hover" color="inherit">
            Courses
          </Link>
        </Breadcrumbs>

        {/* Heading and Search bar */}
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}></Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontFamily: "Noto Kufi Arabic, sans-serif",
                fontWeight: "bold",
                color: "#333",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                textAlign: "center",
              }}
            >
              Our <span style={{ color: "#0073e6" }}>Courses</span>
            </Typography>
            <hr
              style={{
                border: "none",
                height: "4px",
                backgroundColor: "#33b24c",
                width: "10%",
                alignSelf: "center",
                margin: "20px auto",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={4} container justifyContent="flex-end">
            <TextField
              label="Search Courses"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleSearchChange}
              value={searchTerm}
              sx={{
                borderRadius: '20px',
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px',
                },
                height: "40px",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {/* Left Column (30%) - Filter Section */}
          <Grid item xs={12} sm={4} md={3}>
            <Box
              sx={{
                backgroundColor: "#fff",
                borderRadius: 2,
                padding: 2,
                boxShadow: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                Filter by Category
              </Typography>
              <Divider sx={{ marginY: 1 }} />
              <Typography sx={{ fontWeight: "bold", fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                Program
              </Typography>
              {categories.map((category) => (
                <FormControlLabel 
                    key={category}
                    control={
                    <Checkbox
                        checked={selectedCategories.includes(category)}
                        onChange={handleCategoryChange}
                        name={category}
                        color="primary"
                    />
                    }
                    label={category}
                />
              ))}
              <Divider sx={{ marginY: 1 }} />
              <Typography sx={{ fontWeight: "bold", fontFamily: "Noto Kufi Arabic, sans-serif" }}>
                School
              </Typography>
              {titles.map((title) => (
                <FormControlLabel 
                    key={title}
                    control={
                    <Checkbox
                        checked={selectedTitles.includes(title)}
                        onChange={handleTitleChange}
                        name={title}
                        color="primary"
                    />
                    }
                    label={title}
                />
              ))}
              <Button
                variant="outlined"
                color="error"
                onClick={handleClearFilters}
                sx={{ marginTop: 2, width: "100%" }}
              >
                Clear Filters
              </Button>
            </Box>
          </Grid>

          {/* Right Column (70%) - Course List */}
          <Grid item xs={12} sm={8} md={9}>
            <Grid container spacing={2}>
              {currentItems.map((product, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      position: "relative",
                      borderRadius: 3,
                      border: "1px solid #ddd",
                      boxShadow: 2,
                      backgroundImage: `url(${product.imageUrl})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: 400,
                      marginBottom: "30px",
                      transition: "0.3s",
                      "&:hover": {
                        boxShadow: 6,
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    {/* Content Box at the Top */}
                    <Box display="flex" justifyContent="space-between" p={2}>
                      <Typography
                        variant="h6"
                        component="span"
                        sx={{
                          fontFamily: "Noto Kufi Arabic, sans-serif",
                          fontSize: { xs: "0.8rem", sm: "0.9rem" },
                          fontWeight: "bold",
                          color: "white",
                        }}
                      >
                        {product.title} | {product.categories}
                      </Typography>
                    </Box>

                    {/* CardContent at the bottom */}
                    <CardContent
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: 2,
                        background: "linear-gradient(to right, #0073e6, #005bb5)",
                        color: "white",
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "Noto Kufi Arabic, sans-serif",
                          fontSize: { xs: "0.75rem", sm: "0.875rem" },
                        }}
                      >
                        {product.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Pagination */}
            <Stack
              spacing={2}
              sx={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Pagination
                count={Math.ceil(filteredProducts.length / itemsPerPage)}
                page={currentPage}
                onChange={handlePageChange}
                variant="outlined"
                color="primary"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Courses;
