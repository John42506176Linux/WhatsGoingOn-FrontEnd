import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCategory } from '../actions/categoriesActions';
import { RootState } from '../store/store';
import { ScrollView } from 'react-native';
import { categories } from '../constants/categories_constants';

interface CategoryProps {
  name: string;
  image: any; // Use appropriate type here
}

const Category: React.FC<CategoryProps> = ({ name, image }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) => state.categories.selectedCategories.includes(name));

  const categoryStyle = isSelected ? styles.selectedCategory : styles.category;

  return (
    <TouchableOpacity style={categoryStyle} onPress={() => dispatch(toggleCategory(name))}>
      <Image source={image} style={styles.image} />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

const CategorySelection: React.FC = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {categories.map(category => <Category key={category.name} {...category} />)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  category: {
    width: '50%',
    padding: 10,
    borderColor: 'transparent',
    borderWidth: 2
  },
  selectedCategory: {
    width: '50%',
    padding: 10,
    borderColor: 'blue',
    borderWidth: 2
  },
  image: {
    width: '100%',
    height: 100
  }
});

export default CategorySelection;
