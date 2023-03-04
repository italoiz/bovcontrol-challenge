import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <TouchableOpacity>
      <View style={{ padding: 10, backgroundColor: '#fff', marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
          Italo Andrade
        </Text>
        <Text style={{ marginBottom: 5 }}>
          Tilonguili, Vitoria da Conquista
        </Text>
        <Text style={{ marginBottom: 5 }}>Criado em: 16/05/1994</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: '#aaa' }}>CBL</Text>
          <Text style={{ color: '#aaa' }}>Supervisão: Sim</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
