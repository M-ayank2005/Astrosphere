import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db';
import User from '@/models/User';
import { verifyToken } from '@/lib/auth';

export async function GET(req) {
  try {
    const token = req.headers.get('Authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ msg: "No token, authorization denied" }, { status: 401 });
    }

    const decoded = await verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ msg: "Token is not valid" }, { status: 401 });
    }

    await connectDB();
    const user = await User.findById(decoded.id).select("-password");
    
    if (!user) {
      return NextResponse.json({ msg: "User not found" }, { status: 404 });
    }

    // Transform the user data to match frontend expectations
    const userData = {
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      email: user.email,
      dob: user.dob,
      gender: user.gender || '',
      status: user.status || '',
      partnerName: user.partnerName || ''
    };

    return NextResponse.json(userData);
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ msg: "Server error" }, { status: 500 });
  }
} 