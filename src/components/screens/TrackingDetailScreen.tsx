import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type TrackingDetailProps = {
    route: RouteProp<MainStackParamList, "TrackingDetail">,
    navigation: FrameNavigationProp<MainStackParamList, "TrackingDetail">,
};

export function TrackingDetailScreen({ route }: TrackingDetailProps) {
    const { trackingNumber } = route.params;

    return (
        <scrollView>
            <flexboxLayout style={styles.container}>
                <label className="text-2xl font-bold mb-4">
                    Tracking Number: {trackingNumber}
                </label>
                
                <stackLayout className="w-full p-4 bg-white rounded-lg mb-4">
                    <label className="font-bold mb-2">Vessel Information</label>
                    <label>Vessel: Sample Vessel</label>
                    <label>Current Port: Port of Shanghai</label>
                    <label>Status: In Transit</label>
                </stackLayout>
                
                <stackLayout className="w-full p-4 bg-white rounded-lg mb-4">
                    <label className="font-bold mb-2">Route Details</label>
                    <label>Origin: Port of Los Angeles</label>
                    <label>Destination: Port of Rotterdam</label>
                    <label>ETA: 2024-04-15</label>
                </stackLayout>
                
                <stackLayout className="w-full p-4 bg-white rounded-lg">
                    <label className="font-bold mb-2">Tracking Events</label>
                    <label>2024-03-20: Departed Port of Los Angeles</label>
                    <label>2024-03-25: Crossed Panama Canal</label>
                    <label>2024-04-01: Approaching European Waters</label>
                </stackLayout>
            </flexboxLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 16,
        backgroundColor: "#f3f4f6",
    },
});