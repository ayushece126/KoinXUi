"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Hardcoded data for demonstration
const data = [
  { date: "2023-01-01", price: 16000 },
  { date: "2023-02-01", price: 20000 },
  { date: "2023-03-01", price: 18000 },
  { date: "2023-04-01", price: 25000 },
  { date: "2023-05-01", price: 22000 },
  { date: "2023-06-01", price: 30000 },
  { date: "2023-07-01", price: 28000 },
];

const timeRanges = ["1D", "1W", "1M", "3M", "6M", "1Y", "ALL"];

export function CryptoChart() {
  const [selectedRange, setSelectedRange] = useState("1M");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bitcoin Price Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs
          value={selectedRange}
          onValueChange={setSelectedRange}
          className="mb-4"
        >
          <TabsList className="grid grid-cols-4 sm:grid-cols-7">
            {timeRanges.map((range) => (
              <TabsTrigger
                key={range}
                value={range}
                className="text-xs sm:text-sm"
              >
                {range}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="h-[300px] sm:h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="date"
                tickFormatter={(value) => new Date(value).toLocaleDateString()}
                tick={{ fontSize: 12 }}
                interval={"preserveStartEnd"}
              />
              <YAxis />
              <Tooltip
                labelFormatter={(value) => new Date(value).toLocaleDateString()}
                formatter={(value) => [`$${value}`, "Price"]}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
