import Alert from '../components/Alert'

import { AuthProvider } from '../hooks/useAuth'
import { AlertProvider } from '../hooks/useAlert'

import '../styles/globals.css'


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body>
        <AlertProvider>
          <AuthProvider>
            <Alert />
            <div className="h-screen flex justify-center items-center">
              <div className="p-4 bg-gray-200 border border-gray-800 shadow-xl rounded-xl">
                {children}
              </div>
            </div>
          </AuthProvider>
        </AlertProvider>
      </body>
    </html>
  )
}
