import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Helvetica",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    marginBottom: 30,
  },
  item: {
    flexDirection: "row",
    marginBottom: 10,
  },
  itemName: {
    width: "70%",
  },
  itemPrice: {
    width: "30%",
    textAlign: "right",
  },
  total: {
    marginTop: 30,
    textAlign: "right",
  },
});

const Receipt = ({ cartItems, total }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Receipt</Text>
      {cartItems.map((item, index) => (
        <View key={index} style={styles.item}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.itemPrice}>{item.price} dh</Text>
        </View>
      ))}
      <Text style={styles.total}>Total: {total} dh</Text>
    </Page>
  </Document>
);

export default Receipt;
