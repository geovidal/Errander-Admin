# Errander Admin Dashboard

A modern, responsive admin dashboard built with Next.js, TypeScript, and Tailwind CSS for managing Errander delivery operations.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI components
- **Interactive Components**: Dynamic tables, filters, and action menus
- **Status Management**: Visual status indicators for delivery states
- **Clean Architecture**: Well-organized component structure

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── components/          # Reusable UI components
│   └── Sidebar.tsx     # Navigation sidebar
├── deliveries/          # Deliveries module
│   └── page.tsx        # Deliveries page
├── globals.css          # Global styles and Tailwind imports
├── layout.tsx           # Root layout component
└── page.tsx             # Home page (redirects to deliveries)
```

## Components

### Sidebar
- Navigation menu with active state indicators
- User information display
- Logout functionality

### Deliveries Page
- Filterable delivery table
- Status-based filtering
- Date range selection
- Action menus for each delivery
- Pagination controls

## Features Implemented

✅ **Sidebar Navigation**
- Dashboard, Deliveries, Customers, Erranders, Settings
- Active state highlighting
- User info and logout

✅ **Deliveries Management**
- Comprehensive delivery table
- Status indicators (Pending, In-Transit, Delivered, Cancelled)
- Filter by status and date
- Action menus (View, Edit, Delete)
- Pagination

✅ **Modern UI/UX**
- Responsive design
- Hover effects and transitions
- Clean, professional appearance
- Consistent color scheme

## Color Scheme

- **Primary**: Green (#229b5c) - Success states
- **Accent**: Orange (#f7a72a) - Active states
- **Brand**: Blue (#0a6cf4) - Primary actions
- **Success**: Green (#35af67) - Positive states
- **Warning**: Orange (#f7a72a) - Caution states
- **Error**: Red (#e63715) - Error states
- **Purple**: (#ae40f3) - Special states

## Future Enhancements

- [ ] Add delivery creation form
- [ ] Implement search functionality
- [ ] Add bulk actions
- [ ] Export to CSV/PDF
- [ ] Real-time updates
- [ ] User authentication
- [ ] Role-based access control

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details
