import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {/** CategoryCard */}
      <CategoryCard
        imgUrl="https://bosskitchen.com/wp-content/uploads/2021/02/fun-food.jpg"
        title="Testing 1"
      />
      <CategoryCard
        imgUrl="https://bosskitchen.com/wp-content/uploads/2021/02/fun-food.jpg"
        title="Testing 2"
      />
      <CategoryCard
        imgUrl="https://bosskitchen.com/wp-content/uploads/2021/02/fun-food.jpg"
        title="Testing 3"
      />
    </ScrollView>
  );
};

export default Categories;
