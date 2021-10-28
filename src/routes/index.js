import React, { useContext } from 'react'
import { ActivityIndicator, View, StyleSheet } from "react-native"

// context
import AuthContext from '../contexts/auth'

// routes
import AuthRoutes from '../routes/auth.routes'
import AppRoutes from '../routes/app.routes'

const Routes = () => {
  const { signed, loading } = useContext(AuthContext)

  if (loading) {
    return (
      <View style={[styles.container, { flex: 1, justifyContent: 'center' }]}>
        <ActivityIndicator
          visible={loading}
          size="large"
          color={"#000"}
        />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#363940',
    paddingTop: 20
  },
})